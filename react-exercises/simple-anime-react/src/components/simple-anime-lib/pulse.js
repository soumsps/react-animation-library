import React, { useRef, memo } from 'react';
import { useAnimationFrame, timingFunction } from './helper';
import { DEFAULT_PULSE_CONFIG } from "./constants";
const Pulse  = memo((props) => {
  const delay = props.delay ? Number(props.delay) : DEFAULT_PULSE_CONFIG.delay;
  const duration = props.duration ? Number(props.duration) : DEFAULT_PULSE_CONFIG.duration;
  const isInfiniteAnimation = props.isInfiniteAnimation
    ? props.isInfiniteAnimation
    : DEFAULT_PULSE_CONFIG.easingStyle;
  const easingStyle = props.easingStyle ? props.easingStyle : DEFAULT_PULSE_CONFIG.easingStyle;

  const elementRef = useRef({style: {transform: 'scale3d(1,1,1)'}});
  let timing = timingFunction[DEFAULT_PULSE_CONFIG.easingStyle];
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
