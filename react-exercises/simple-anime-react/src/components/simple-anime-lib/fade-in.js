import React, { useRef, useEffect, useCallback } from 'react';
import { DEFAULT_DELAY, DEFAULT_DURATION } from './constants';

const FadeIn = (props) => {
  const delay = props.delay ? Number(props.delay) : DEFAULT_DELAY;
  const duration = props.duration ? Number(props.duration) : DEFAULT_DURATION;
  const isInfiniteAnimation = props.isInfiniteAnimation
    ? props.isInfiniteAnimation
    : false;
  const elementRef = useRef({ style: { opacity: 0.0 } });

  const timing = useCallback((timeFraction) => {
    return timeFraction;
  }, []);

  const draw = useCallback((progress) => {
    console.log('drawing', elementRef);
    if (elementRef.current !== null) elementRef.current.style.opacity = progress;
  }, []);

  const animate = useCallback(() => {
    var start = performance.now();

    requestAnimationFrame(function animate(time) {
      var timeFraction = (time - start) / duration;
      if (timeFraction > 1) {
        if (isInfiniteAnimation) {
          start = time;
          timeFraction = 0.0;
        } else {
          timeFraction = 1;
        }
      }

      var progress = timing(timeFraction);
      draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }, [duration, timing, draw, isInfiniteAnimation]);

  useEffect(() => {
    setTimeout(() => animate(), delay);
  }, [animate, delay]);

  return (
    <span ref={elementRef} style={elementRef.current.style}>
      {props.children}
    </span>
  );
};

export { FadeIn };
