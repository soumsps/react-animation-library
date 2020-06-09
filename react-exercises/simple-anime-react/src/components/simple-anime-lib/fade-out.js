import React, { useRef, memo } from 'react';
import { DEFAULT_FADEOUT_CONFIG } from './constants';
import {
  useAnimationFrame,
  timingFunction,
  getDelay,
  getDuration,
  getIterationCount,
  getEasing,
} from './helper';

const FadeOut = memo((props) => {
  const delay = getDelay(props.delay, DEFAULT_FADEOUT_CONFIG.delay);
  const duration = getDuration(props.duration, DEFAULT_FADEOUT_CONFIG.duration);
  const iterationCount = getIterationCount(
    props.iterationCount,
    DEFAULT_FADEOUT_CONFIG.iterationCount
  );
  const easing = getEasing(props.easing, DEFAULT_FADEOUT_CONFIG.easing);

  const elementRef = useRef({ style: { opacity: 1.0 } });
  let timing = timingFunction[DEFAULT_FADEOUT_CONFIG.easing];

  const draw = (progress) => {
    if (elementRef.current !== null) {
      elementRef.current.style.opacity = 1 - progress;
    }
  };
  if (timingFunction[easing]) {
    timing = timingFunction[easing];
  }
  useAnimationFrame({ delay, duration, timing, draw, iterationCount });

  return (
    <span ref={elementRef} style={elementRef.current.style}>
      {props.children}
    </span>
  );
});

export { FadeOut };
