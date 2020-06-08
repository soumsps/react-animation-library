import React, { useRef, memo } from 'react';
import { useAnimationFrame, timingFunction } from './helper';
import { DEFAULT_SLIDEUP_CONFIG } from './constants';

const SlideUpDown = memo((props) => {
  const delay = props.delay
    ? Number(props.delay)
    : DEFAULT_SLIDEUP_CONFIG.delay;
  const duration = props.duration
    ? Number(props.duration)
    : DEFAULT_SLIDEUP_CONFIG.duration;
  const isInfiniteAnimation = props.isInfiniteAnimation
    ? props.isInfiniteAnimation
    : DEFAULT_SLIDEUP_CONFIG.isInfiniteAnimation;
  const easing = props.easing ? props.easing : DEFAULT_SLIDEUP_CONFIG.easing;
  const maxHeight = props.maxHeight
    ? Number(props.maxHeight)
    : DEFAULT_SLIDEUP_CONFIG.maxHeight;

  const elementRef = useRef({
    style: { position: 'relative', top: `0px` },
  });

  let timing = timingFunction[DEFAULT_SLIDEUP_CONFIG.easing];

  const draw = (progress) => {
    if (elementRef.current !== null) {
      if (progress < 0.5) {
        const up = maxHeight * (1 / 0.5) * progress;
        elementRef.current.style.top = up + 'px';
      } else {
        const d = maxHeight * ((1 / 0.5) * (1 - progress));
        elementRef.current.style.top = d + 'px';
      }
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
export { SlideUpDown };
