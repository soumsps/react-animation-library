import React from 'react';
import { Pulse } from '../simple-anime-lib';
import DemoPic from './demo-pic.jpg';
const PulseDemo = () => {
   
  return <div className="demo-content">
  <h1>Pulse</h1>
  <p>The pulse animation adds a pulse effect to </p>
      <div>
        <h3>
          This demo page showcases the 
          <Pulse
            duration={1000}
            delay={2000}
            isInfiniteAnimation={true}
            >
            pulse
          </Pulse>
          effect.
        </h3>
        <p>
          Simple animation library that have the following things. - Bounce - FadeIn and
          Out with easing effects - Slide up to limit and come back to original location -
          Pulse
        </p>
        <Pulse duration={1000} delay={1000} isInfiniteAnimation={true}>
          <img src={DemoPic} alt="effect demo"></img>
        </Pulse>
      </div>
    </div>
};

export default PulseDemo;
