import React, { useRef, memo } from 'react';
import { useAnimationFrame, timingFunction } from './helper';
import { DEFAULT_PULSE_CONFIG } from './constants';

const Pulse = memo((props) => {
  const delay = props.delay ? Number(props.delay) : DEFAULT_PULSE_CONFIG.delay;

  const duration = props.duration
    ? Number(props.duration)
    : DEFAULT_PULSE_CONFIG.duration;

  const iterationCount = props.iterationCount
    ? Number(props.iterationCount)
    : DEFAULT_PULSE_CONFIG.iterationCount;

  const easing = props.easing ? props.easing : DEFAULT_PULSE_CONFIG.easing;

  const scale = props.scale
    ? Math.abs(Number(props.scale))
    : DEFAULT_PULSE_CONFIG.scale;

  const elementRef = useRef({ style: { transform: 'scale(1,1)' } });
  let timing = timingFunction[DEFAULT_PULSE_CONFIG.easing];

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
  if (timingFunction[easing]) {
    timing = timingFunction[easing];
  }
  useAnimationFrame({ delay, duration, timing, draw, iterationCount });
  return (
    <div ref={elementRef} style={elementRef.current.style}>
      {props.children}
    </div>
  );
});

export { Pulse };
