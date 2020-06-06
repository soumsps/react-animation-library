import React from 'react';
import { Pulse } from '../simple-anime-lib';
import DemoPic from './demo-pic.jpg';
const PulseDemo = () => {
   
  return (
  <div className="demo-content">
  <h1>Pulse</h1>
  <p>This pulse effect adds the pulse animation effect to the element</p>
  <h3>Usage</h3>
  <h3>Examples</h3>
      <div>
        <h3>
          This demo page showcases the 
          <Pulse
            duration={5000}
            delay={2000}
            isInfiniteAnimation={false}
            easingStyle={'linear'}
            >
            pulse
          </Pulse>
          effect.
        </h3>
        <Pulse duration={1000} delay={1000} isInfiniteAnimation={false} easingStyle={'linear'}>
          <img src={DemoPic} alt="effect demo"></img>
        </Pulse>
      </div>
      </div>
)};

export default PulseDemo;
