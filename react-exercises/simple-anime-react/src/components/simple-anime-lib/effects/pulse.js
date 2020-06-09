import React, { useRef, memo } from 'react';
import { DEFAULT_PULSE_CONFIG } from '../constants';
import {
  useAnimationFrame,
  timingFunction,
  getDelay,
  getDuration,
  getIterationCount,
  getEasing,
  getScale,
} from '../helper';

const Pulse = memo((props) => {
  const delay = getDelay(props.delay, DEFAULT_PULSE_CONFIG.delay);
  const duration = getDuration(props.duration, DEFAULT_PULSE_CONFIG.duration);
  const iterationCount = getIterationCount(
    props.iterationCount,
    DEFAULT_PULSE_CONFIG.iterationCount
  );
  const easing = getEasing(props.easing, DEFAULT_PULSE_CONFIG.easing);
  const scale = getScale(props.scale, DEFAULT_PULSE_CONFIG.scale);
  const timing = timingFunction[easing];

  const elementRef = useRef({
    style: { display: 'inline-block', transform: 'scale(1,1)' },
  });

  const draw = (progress) => {
    if (elementRef.current != null) {
      if (progress < 0.5) {
        const incFactor = progress * ((scale - 1) / 0.5);
        elementRef.current.style.transform = `scale(${1 + incFactor},${
          1 + incFactor
        })`;
      } else if (progress > 0.5) {
        const decFactor = (1 - progress) * ((scale - 1) / 0.5);
        elementRef.current.style.transform = `scale(${1 + decFactor},${
          1 + decFactor
        })`;
      }
    }
  };

  useAnimationFrame({ delay, duration, timing, draw, iterationCount });
  return (
    <span ref={elementRef} style={elementRef.current.style}>
      {props.children}
    </span>
  );
});

export { Pulse };
