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
  const easingStyle = props.easingStyle
    ? props.easingStyle
    : DEFAULT_SLIDEUP_CONFIG.easingStyle;
  const dropHeight = props.dropHeight ? Number(props.dropHeight) : -20;

  const elementRef = useRef({
    style: { position: 'relative', top: `0px` },
  });

  let timing = timingFunction[DEFAULT_SLIDEUP_CONFIG.easingStyle];

  const draw = (progress) => {
    if (elementRef.current !== null) {
      if (progress < 0.5) {
        const up = dropHeight * (1 / 0.5) * progress;
        elementRef.current.style.top = up + 'px';
      } else {
        const d = dropHeight * ((1 / 0.5) * (1 - progress));
        elementRef.current.style.top = d + 'px';
      }
    }
  };

  if (timingFunction[easingStyle]) {
    timing = timingFunction[easingStyle];
  }
  useAnimationFrame({ delay, duration, timing, draw, isInfiniteAnimation });
  return (
    <span ref={elementRef} style={elementRef.current.style}>
      {props.children}
    </span>
  );
});
export { SlideUpDown };
