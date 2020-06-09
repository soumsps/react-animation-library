import React, { useRef, memo } from 'react';
import { useAnimationFrame, timingFunction } from './helper';
import { DEFAULT_BOUNCE_CONFIG } from './constants';

const Bounce = memo((props) => {
  const delay = props.delay ? Number(props.delay) : DEFAULT_BOUNCE_CONFIG.delay;

  const duration = props.duration
    ? Number(props.duration)
    : DEFAULT_BOUNCE_CONFIG.duration;

  const iterationCount = props.iterationCount
    ? Number(props.iterationCount)
    : DEFAULT_BOUNCE_CONFIG.iterationCount;

  const easing = props.easing ? props.easing : DEFAULT_BOUNCE_CONFIG.easing;

  const dropHeight = props.dropHeight ? Number(props.dropHeight) : -20;

  const elementRef = useRef({
    style: { position: 'relative', top: `0px` },
  });

  let timing = timingFunction[DEFAULT_BOUNCE_CONFIG.easing];

  const draw = (progress) => {
    if (elementRef.current !== null) {
      if (progress < 0.2) {
        elementRef.current.style.top = dropHeight * (1 / 0.2) * progress + 'px';
      } else {
        elementRef.current.style.top = dropHeight * (1 - progress) + 'px';
      }
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

export { Bounce };
