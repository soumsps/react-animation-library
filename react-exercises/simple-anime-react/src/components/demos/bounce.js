import React from 'react';
import DemoPic from './demo-pic.jpg';
import { Bounce } from '../simple-anime-lib';
const BounceDemo = () => {
  return (
    <div className="demo-content">
      <div>
        <h3>
          This demo page show case the{' '}
          <Bounce
            duration={1000}
            delay={2000}
            isInfiniteAnimation={true}
            easingStyle={'bounce'}
            dropHeight={-40}
          >
            bounce{' '}
          </Bounce>
          effect.
        </h3>
        <p>
          Simple animation library that have the following things. - Bounce - FadeIn and
          Out with easing effects - Slide up to limit and come back to original location -
          Pulse
        </p>
        <Bounce
          duration={3000}
          delay={2000}
          isInfiniteAnimation={true}
          easingStyle={'bounce'}
        >
          <img src={DemoPic} alt="effect demo"></img>
        </Bounce>
      </div>
    </div>
  );
};

export default BounceDemo;
