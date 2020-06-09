import React, { useRef, memo } from 'react';
import { DEFAULT_SLIDEUPDOWN_CONFIG } from '../constants';
import {
  useAnimationFrame,
  timingFunction,
  getDelay,
  getDuration,
  getIterationCount,
  getEasing,
  getMaxHeight,
} from '../helper';

const SlideUpDown = memo((props) => {
  const delay = getDelay(props.delay, DEFAULT_SLIDEUPDOWN_CONFIG.delay);
  const duration = getDuration(
    props.duration,
    DEFAULT_SLIDEUPDOWN_CONFIG.duration
  );
  const iterationCount = getIterationCount(
    props.iterationCount,
    DEFAULT_SLIDEUPDOWN_CONFIG.iterationCount
  );
  const easing = getEasing(props.easing, DEFAULT_SLIDEUPDOWN_CONFIG.easing);
  const maxHeight = getMaxHeight(
    props.maxHeight,
    DEFAULT_SLIDEUPDOWN_CONFIG.maxHeight
  );
  const timing = timingFunction[easing];
  const elementRef = useRef({
    style: { position: 'relative', top: `0px` },
  });

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

  useAnimationFrame({ delay, duration, timing, draw, iterationCount });
  return (
    <span ref={elementRef} style={elementRef.current.style}>
      {props.children}
    </span>
  );
});
export { SlideUpDown };
