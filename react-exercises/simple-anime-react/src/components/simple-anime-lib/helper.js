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

const timingFunction = {
  linear: function (timeFraction) {
    return timeFraction;
  },
  quad: function quad(timeFraction) {
    return Math.pow(timeFraction, 2);
  },

  bounce: function bounce(timeFraction) {
    timeFraction = 1 - timeFraction;
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return (
          1 - (-1 * Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2))
        );
      }
    }
  },
};

export { useAnimationFrame, timingFunction };
