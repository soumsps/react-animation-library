import React from 'react';
import { FadeOut } from '../simple-anime-lib';
import DemoPic from '../../assets/images/demo-pic.jpg';
const FadeOutDemo = () => {
  return (
    <div className="demo-content">
      <div>
        <h3>
          This demo page show case the{' '}
          <FadeOut duration={5000} iterationCount={Infinity}>
            fade out
          </FadeOut>{' '}
          effect.
        </h3>
        <p>
          Simple animation library that have the following things. - Bounce -
          FadeIn and Out with easing effects - Slide up to limit and come back
          to original location - Pulse
        </p>
        <FadeOut duration={3000} delay={2000} iterationCount={2}>
          <img src={DemoPic} alt="effect demo"></img>
        </FadeOut>
      </div>
    </div>
  );
};

export default FadeOutDemo;
