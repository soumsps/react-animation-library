import React from "react";
import {
  DEFAULT_DELAY,
  DEFAULT_DURATION,
  DEFAULT_IS_INFINITE_ANIMATION,
} from "./constants";
const Pulse = (props) => {
  const delay = props.delay ? Number(props.delay) : DEFAULT_DELAY;
  const duration = props.duration ? Number(props.duration) : DEFAULT_DURATION;
  const isInfiniteAnimation = props.isInfiniteAnimation
    ? props.isInfiniteAnimation
    : DEFAULT_IS_INFINITE_ANIMATION;
  return (
    <div
      style={{
        animation: `pulse ${duration}ms ${delay}ms ${
          isInfiniteAnimation ? "infinite" : "1"
        }`,
      }}
    >
      {props.children}
    </div>
  );
};

export { Pulse };
