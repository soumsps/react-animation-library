import React, { useRef, memo } from 'react';
import { useAnimationFrame, timingFunction } from './helper';
import { DEFAULT_FADEOUT_CONFIG } from './constants';

const FadeOut = memo((props) => {
  const delay = props.delay
    ? Number(props.delay)
    : DEFAULT_FADEOUT_CONFIG.delay;
  const duration = props.duration
    ? Number(props.duration)
    : DEFAULT_FADEOUT_CONFIG.duration;
  const isInfiniteAnimation = props.isInfiniteAnimation
    ? props.isInfiniteAnimation
    : DEFAULT_FADEOUT_CONFIG.isInfiniteAnimation;
  const easing = props.easing ? props.easing : DEFAULT_FADEOUT_CONFIG.easing;

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
  useAnimationFrame({ delay, duration, timing, draw, isInfiniteAnimation });

  return (
    <span ref={elementRef} style={elementRef.current.style}>
      {props.children}
    </span>
  );
});

export { FadeOut };
