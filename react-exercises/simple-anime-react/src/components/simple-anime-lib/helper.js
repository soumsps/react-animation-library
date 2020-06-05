import { useRef, useEffect, useCallback } from 'react';

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

export { useAnimationFrame };
