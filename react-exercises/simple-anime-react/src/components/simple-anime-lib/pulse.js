import React, { useRef, memo } from 'react';
import { useAnimationFrame, timingFunction } from './helper';
import {
  DEFAULT_DELAY,
  DEFAULT_DURATION,
  DEFAULT_IS_INFINITE_ANIMATION,
  DEFAULT_EASE_STYLE
} from "./constants";
const Pulse  = memo((props) => {
  const delay = props.delay ? Number(props.delay) : DEFAULT_DELAY;
  const duration = props.duration ? Number(props.duration) : DEFAULT_DURATION;
  const isInfiniteAnimation = props.isInfiniteAnimation
    ? props.isInfiniteAnimation
    : DEFAULT_IS_INFINITE_ANIMATION;
  const easingStyle = props.easingStyle ? props.easingStyle : DEFAULT_EASE_STYLE;

  const elementRef = useRef({style: {transform: 'scale3d(1,1,1)'}});
  let timing = timingFunction[DEFAULT_EASE_STYLE];
  const draw = (progress) => {
    if (elementRef.current != null) {
    if (progress < 0.5) {
      elementRef.current.style.transform = `scale3d(${progress*1.5*2},${progress*1.5*2},${progress*1.5*2})`;
    } else if ( progress > 0.6) {
      elementRef.current.style.transform = `scale3d(${(1-progress)*1*2},${(1-progress)*1*2},${(1-progress)*1*2})`;
    }
  }
};
  if (timingFunction[easingStyle]) {
    timing = timingFunction[easingStyle];
  }
  useAnimationFrame({ delay, duration, timing, draw, isInfiniteAnimation });
  return (
    <div ref={elementRef} style={elementRef.current.style}  >
      {props.children}
    </div>
  );
});

export { Pulse };
