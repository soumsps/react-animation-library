import React, { useRef, memo } from 'react';
import { useAnimationFrame, timingFunction } from './helper';
import {
  DEFAULT_DELAY,
  DEFAULT_DURATION,
  DEFAULT_IS_INFINITE_ANIMATION,
  DEFAULT_EASE_STYLE,
} from './constants';

const Bounce = memo((props) => {
  const delay = props.delay ? Number(props.delay) : DEFAULT_DELAY;
  const duration = props.duration ? Number(props.duration) : DEFAULT_DURATION;
  const isInfiniteAnimation = props.isInfiniteAnimation
    ? props.isInfiniteAnimation
    : DEFAULT_IS_INFINITE_ANIMATION;
  const easingStyle = props.easingStyle ? props.easingStyle : DEFAULT_EASE_STYLE;
  const dropHeight = props.dropHeight ? Number(props.dropHeight) : -20;

  const elementRef = useRef({
    style: { position: 'relative', top: `0px` },
  });

  let timing = timingFunction[DEFAULT_EASE_STYLE];

  const draw = (progress) => {
    console.log('drawing');
    if (elementRef.current !== null) {
      if (progress < 0.2) {
        elementRef.current.style.top = dropHeight * (1 / 0.2) * progress + 'px';
      } else {
        elementRef.current.style.top = dropHeight * (1 - progress) + 'px';
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

export { Bounce };
