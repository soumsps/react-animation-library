import React, { useRef, memo } from 'react';
import { useAnimationFrame, timingFunction } from './helper';
import {
  DEFAULT_DELAY,
  DEFAULT_DURATION,
  DEFAULT_IS_INFINITE_ANIMATION,
  DEFAULT_EASE_STYLE,
} from './constants';

const FadeIn = memo((props) => {
  const delay = props.delay ? Number(props.delay) : DEFAULT_DELAY;
  const duration = props.duration ? Number(props.duration) : DEFAULT_DURATION;
  const isInfiniteAnimation = props.isInfiniteAnimation
    ? props.isInfiniteAnimation
    : DEFAULT_IS_INFINITE_ANIMATION;
  const easingStyle = props.easingStyle ? props.easingStyle : DEFAULT_EASE_STYLE;

  const elementRef = useRef({ style: { opacity: 0.0 } });
  let timing = timingFunction[DEFAULT_EASE_STYLE];

  const draw = (progress) => {
    console.log('drawing');
    if (elementRef.current !== null) {
      elementRef.current.style.opacity = progress;
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

export { FadeIn };
