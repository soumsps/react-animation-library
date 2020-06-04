import React from 'react';
import BounceDemo from '../../components/bounce-demo';

const Homepage = () => {
  return (
    <div>
      <div>
        <label for="effects">Choose Effect: </label>
        <select name="effects">
          <option value="bounce">Bounce</option>
          <option value="fadeIn">FadeIn</option>
          <option value="fadeOut">FadeOut</option>
          <option value="pulse">Pulse</option>
          <option value="slideUpDown">Side Up Down</option>
        </select>
      </div>

      <BounceDemo />
    </div>
  );
};

export default Homepage;
