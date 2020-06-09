import React, { useRef, memo } from 'react';
import { DEFAULT_FADEIN_CONFIG } from './constants';
import {
  useAnimationFrame,
  timingFunction,
  getDelay,
  getDuration,
  getIterationCount,
  getEasing,
} from './helper';

const FadeIn = memo((props) => {
  const delay = getDelay(props.delay, DEFAULT_FADEIN_CONFIG.delay);
  const duration = getDuration(props.duration, DEFAULT_FADEIN_CONFIG.duration);
  const iterationCount = getIterationCount(
    props.iterationCount,
    DEFAULT_FADEIN_CONFIG.iterationCount
  );
  const easing = getEasing(props.easing, DEFAULT_FADEIN_CONFIG.easing);

  const elementRef = useRef({ style: { opacity: 0.0 } });
  let timing = timingFunction[DEFAULT_FADEIN_CONFIG.easing];

  const draw = (progress) => {
    if (elementRef.current !== null) {
      elementRef.current.style.opacity = progress;
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

export { FadeIn };
