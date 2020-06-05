import React, { useRef, memo } from 'react';
import { DEFAULT_DELAY, DEFAULT_DURATION } from './constants';
import { useAnimationFrame } from './helper';

const FadeOut = memo((props) => {
  const delay = props.delay ? Number(props.delay) : DEFAULT_DELAY;
  const duration = props.duration ? Number(props.duration) : DEFAULT_DURATION;
  const isInfiniteAnimation = props.isInfiniteAnimation
    ? props.isInfiniteAnimation
    : false;
  const elementRef = useRef({ style: { opacity: 1.0 } });

  const timing = (timeFraction) => {
    return timeFraction;
  };

  const draw = (progress) => {
    console.log('drawing');
    if (elementRef.current !== null) {
      elementRef.current.style.opacity = 1 - progress;
    }
  };

  useAnimationFrame({ delay, duration, timing, draw, isInfiniteAnimation });

  return (
    <span ref={elementRef} style={elementRef.current.style}>
      {props.children}
    </span>
  );
});

export { FadeOut };
