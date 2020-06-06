import React, { useRef, memo } from 'react';
import { useAnimationFrame, timingFunction } from './helper';
import { DEFAULT_PULSE_CONFIG } from './constants';

const Pulse = memo((props) => {
  const delay = props.delay ? Number(props.delay) : DEFAULT_PULSE_CONFIG.delay;

  const duration = props.duration
    ? Number(props.duration)
    : DEFAULT_PULSE_CONFIG.duration;

  const isInfiniteAnimation = props.isInfiniteAnimation
    ? props.isInfiniteAnimation
    : DEFAULT_PULSE_CONFIG.isInfiniteAnimation;

  const easingStyle = props.easingStyle
    ? props.easingStyle
    : DEFAULT_PULSE_CONFIG.easingStyle;

  const scale = props.scale ? Math.abs(Number(props.scale)) : DEFAULT_PULSE_CONFIG.scale;

  const elementRef = useRef({ style: { transform: 'scale(1,1)' } });
  let timing = timingFunction[DEFAULT_PULSE_CONFIG.easingStyle];

  const draw = (progress) => {
    if (elementRef.current != null) {
      if (progress < 0.5) {
        const incFactor = progress * ((scale - 1) / 0.5);
        elementRef.current.style.transform = `scale(${1 + incFactor},${1 + incFactor})`;
      } else if (progress > 0.5) {
        const decFactor = (1 - progress) * ((scale - 1) / 0.5);
        elementRef.current.style.transform = `scale(${1 + decFactor},${1 + decFactor})`;
      }
    }
  };
  if (timingFunction[easingStyle]) {
    timing = timingFunction[easingStyle];
  }
  useAnimationFrame({ delay, duration, timing, draw, isInfiniteAnimation });
  return (
    <div ref={elementRef} style={elementRef.current.style}>
      {props.children}
    </div>
  );
});

export { Pulse };
