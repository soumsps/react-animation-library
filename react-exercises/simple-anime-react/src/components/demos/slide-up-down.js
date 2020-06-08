import React from 'react';
import { SlideUpDown } from '../simple-anime-lib';
import airBaloon from '../../assets/images/air-balloon.png';

const SlideUpDownDemo = () => {
  return (
    <div className="demo-content">
      <div>
        <h3>
          This demo page show case the{' '}
          <SlideUpDown
            duration={1000}
            delay={2000}
            iterationCount={2}
            easing={'linear'}
            scale={1.9}
            maxHeight={-30}
          >
            slide up and down
          </SlideUpDown>{' '}
          effect.
        </h3>
        <p className="padding-bottom-10">
          Simple animation library that have the following things. - Bounce -
          FadeIn and Out with easing effects - Slide up to limit and come back
          to original location - Pulse
        </p>
        <SlideUpDown
          duration={7000}
          delay={2000}
          iterationCount={2}
          easing={'linear'}
          maxHeight={-150}
        >
          <img src={airBaloon} alt="effect demo"></img>
        </SlideUpDown>
      </div>
    </div>
  );
};
export default SlideUpDownDemo;
