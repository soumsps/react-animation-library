import React, { useRef, memo } from 'react';
import { useAnimationFrame, timingFunction } from './helper';
import { DEFAULT_FADEIN_CONFIG } from './constants';

const FadeIn = memo((props) => {
  const delay = props.delay ? Number(props.delay) : DEFAULT_FADEIN_CONFIG.delay;
  const duration = props.duration
    ? Number(props.duration)
    : DEFAULT_FADEIN_CONFIG.duration;
  const iterationCount = props.iterationCount
    ? Number(props.iterationCount)
    : DEFAULT_FADEIN_CONFIG.iterationCount;
  const easing = props.easing ? props.easing : DEFAULT_FADEIN_CONFIG.easing;

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
