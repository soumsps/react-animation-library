import { useRef, useEffect, useCallback } from 'react';

const useAnimationFrame = ({
  delay,
  duration,
  timing,
  draw,
  iterationCount,
  callback,
}) => {
  const rafRef = useRef();
  const iterationCountRef = useRef(iterationCount - 1);
  const callbackRef = useRef(callback);
  const animate = useCallback(() => {
    let start = performance.now();
    rafRef.current = requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction >= 1) {
        if (iterationCountRef.current) {
          start = time;
          timeFraction = 0.0;
          iterationCountRef.current -= 1;
        }
        if (callbackRef.current) {
          callbackRef.current();
        }
      }
      const progress = timing(timeFraction);
      draw(progress);
      if (timeFraction < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    });
  }, [duration, timing, draw]);

  useEffect(() => {
    setTimeout(
      () => animate({ duration, timing, draw, iterationCount }),
      delay
    );
    return () => {
      cancelAnimationFrame(rafRef.current);
      console.log('clean');
    };
  }, [animate, delay, duration, timing, draw, iterationCount]);
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
          1 -
          (-1 * Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) +
            Math.pow(b, 2))
        );
      }
    }
  },
};

const getDelay = (userValue, defaultValue) => {
  const delay = userValue ? Number(userValue) : defaultValue;
  return delay;
};

const getDuration = (userValue, defaultValue) => {
  const duration = userValue ? Number(userValue) : defaultValue;
  return duration;
};

const getIterationCount = (userValue, defaultValue) => {
  const iterationCount = userValue ? Number(userValue) : defaultValue;
  return iterationCount;
};

const getEasing = (userValue, defaultValue) => {
  const easing = userValue ? userValue : defaultValue;
  return easing;
};

const getDropHeight = (userValue, defaultValue) => {
  const dropHeight = userValue ? Number(userValue) : defaultValue;
  return dropHeight;
};

const getMaxHeight = (userValue, defaultValue) => {
  const maxHeight = userValue ? Number(userValue) : defaultValue;
  return maxHeight;
};

const getScale = (userValue, defaultValue) => {
  const scale = userValue ? Math.abs(Number(userValue)) : defaultValue;
  return scale;
};

const getCallback = (userCallback, defaultCallback) => {
  const callback = userCallback ? userCallback : defaultCallback;
  return callback;
};

export {
  useAnimationFrame,
  timingFunction,
  getDelay,
  getDuration,
  getDropHeight,
  getEasing,
  getIterationCount,
  getMaxHeight,
  getScale,
  getCallback,
};
