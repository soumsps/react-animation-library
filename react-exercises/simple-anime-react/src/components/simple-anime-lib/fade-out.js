import React from 'react';
import './fade-out.style.css';
import { DEFAULT_DELAY, DEFAULT_DURATION } from './constants';

const FadeOut = (props) => {
  const delay = props.delay ? Number(props.delay) : DEFAULT_DELAY;
  const duration = props.duration ? Number(props.duration) : DEFAULT_DURATION;

  return (
    <span
      style={{
        animation: `fadeOut ease ${duration}ms ${delay}ms Infinite`,
      }}
    >
      {props.children}
    </span>
  );
};

export { FadeOut };
