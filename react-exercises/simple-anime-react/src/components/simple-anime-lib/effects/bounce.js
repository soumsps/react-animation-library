import React, { useRef, memo } from 'react';
import { DEFAULT_BOUNCE_CONFIG } from '../constants';
import {
  useAnimationFrame,
  timingFunction,
  getDelay,
  getDuration,
  getIterationCount,
  getEasing,
  getDropHeight,
} from '../helper';

const Bounce = memo((props) => {
  const delay = getDelay(props.delay, DEFAULT_BOUNCE_CONFIG.delay);
  const duration = getDuration(props.duration, DEFAULT_BOUNCE_CONFIG.duration);
  const iterationCount = getIterationCount(
    props.iterationCount,
    DEFAULT_BOUNCE_CONFIG.iterationCount
  );
  const easing = getEasing(props.easing, DEFAULT_BOUNCE_CONFIG.easing);
  const dropHeight = getDropHeight(
    props.dropHeight,
    DEFAULT_BOUNCE_CONFIG.dropHeight
  );
  const timing = timingFunction[easing];

  const elementRef = useRef({
    style: { position: 'relative', top: `0px` },
  });

  const draw = (progress) => {
    if (elementRef.current !== null) {
      if (progress < 0.2) {
        elementRef.current.style.top = dropHeight * (1 / 0.2) * progress + 'px';
      } else {
        elementRef.current.style.top = dropHeight * (1 - progress) + 'px';
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

export { Bounce };
