import React from 'react';
import { FadeOut } from '../simple-anime-lib';
import DemoPic from './demo-pic.jpg';
const FadeOutDemo = () => {
  return (
    <div className="demo-content">
      <div>
        <h3>
          This demo page show case the <FadeOut>fade out</FadeOut> effect.
        </h3>
        <p>
          Simple animation library that have the following things. - Bounce - FadeIn and
          Out with easing effects - Slide up to limit and come back to original location -
          Pulse
        </p>
        <FadeOut>
          <img src={DemoPic} alt="effect demo"></img>
        </FadeOut>
      </div>
    </div>
  );
};

export default FadeOutDemo;
