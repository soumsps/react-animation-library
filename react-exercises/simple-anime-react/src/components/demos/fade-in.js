import React from 'react';
import { FadeIn } from '../simple-anime-lib';
import batman from '../../assets/images/batman.png';
const FadeInDemo = () => {
  return (
    <div className="demo-content">
      <div>
        <h3>
          This demo page show case the{' '}
          <FadeIn
            duration={5000}
            delay={2000}
            iterationCount={Infinity}
            easing={'linear'}
          >
            fade in
          </FadeIn>{' '}
          effect.
        </h3>
        <p>
          Simple animation library that have the following things. - Bounce -
          FadeIn and Out with easing effects - Slide up to limit and come back
          to original location - Pulse
        </p>
        <FadeIn duration={5000} delay={1000} iterationCount={1}>
          <img src={batman} alt="effect demo"></img>
        </FadeIn>
      </div>
    </div>
  );
};

export default FadeInDemo;
