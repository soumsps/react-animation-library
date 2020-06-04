import React from 'react';
import { Bounce } from '../simple-anime-lib';
const BounceDemo = () => {
  return (
    <div>
      <div>
        <h4>Controls</h4>
      </div>
      <label for="delay">Delay: </label>
      <input type="text" name="delay"></input>
      <label for="duration">Duration: </label>
      <input type="text" name="duration"></input>
    </div>
  );
};

export default BounceDemo;
