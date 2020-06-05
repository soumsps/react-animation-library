import React, { useRef, useEffect, useCallback, memo } from 'react';
import { DEFAULT_DELAY, DEFAULT_DURATION } from './constants';

const FadeIn = memo((props) => {
  const delay = props.delay ? Number(props.delay) : DEFAULT_DELAY;
  const duration = props.duration ? Number(props.duration) : DEFAULT_DURATION;
  const isInfiniteAnimation = props.isInfiniteAnimation
    ? props.isInfiniteAnimation
    : false;
  const elementRef = useRef({ style: { opacity: 0.0 } });

  const timing = (timeFraction) => {
    return timeFraction;
  };

  const draw = (progress) => {
    console.log('drawing');
    if (elementRef.current !== null) {
      elementRef.current.style.opacity = progress;
    }
  };

  const useAnimationFrame = ({ delay, duration, timing, draw, isInfiniteAnimation }) => {
    const rafRef = useRef();
    const animate = useCallback(() => {
      var start = performance.now();
      rafRef.current = requestAnimationFrame(function animate(time) {
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
          rafRef.current = requestAnimationFrame(animate);
        }
      });
    }, [duration, timing, draw, isInfiniteAnimation]);

    useEffect(() => {
      setTimeout(() => animate({ duration, timing, draw, isInfiniteAnimation }), delay);
      return () => cancelAnimationFrame(rafRef.current);
    }, [animate, delay, duration, timing, draw, isInfiniteAnimation]);
  };

  useAnimationFrame({ delay, duration, timing, draw, isInfiniteAnimation });
  return (
    <span ref={elementRef} style={elementRef.current.style}>
      {props.children}
    </span>
  );
});

export { FadeIn };
