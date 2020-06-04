import React from 'react';
import { Router, navigate } from '@reach/router';
import BounceDemo from '../../components/demos/bounce';
import PulseDemo from '../../components/demos/pulse';
import FadeInDemo from '../../components/demos/fade-in';
import FadeOutDemo from '../../components/demos/fade-out';
import SlideUpDownDemo from '../../components/demos/slide-up-down';

const Homepage = () => {
  const handelEffectSelectionDropdown = (event) => {
    const value = event.target.value;
    navigate(`${value}`);
  };
  const currentPath = window.location.pathname;

  return (
    <div>
      <div>
        <label htmlFor="effects">Effect: </label>
        <select
          name="effects"
          onChange={(event) => handelEffectSelectionDropdown(event)}
          defaultValue={currentPath}
        >
          <option value="/" disabled>
            Select Effect
          </option>
          <option value="/bounce">Bounce</option>
          <option value="/fade-in">FadeIn</option>
          <option value="/fade-out">FadeOut</option>
          <option value="/pulse">Pulse</option>
          <option value="/slide-up-down">Side Up Down</option>
        </select>
      </div>
      <Router>
        <BounceDemo path="/bounce" />
        <PulseDemo path="/pulse" />
        <FadeInDemo path="/fade-in" />
        <FadeOutDemo path="/fade-out" />
        <SlideUpDownDemo path="/slide-up-down" />
      </Router>
    </div>
  );
};

export default Homepage;
