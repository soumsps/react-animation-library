import React from 'react';
import { Router, navigate } from '@reach/router';
import Homepage from '../src/pages/homepage/homepage.page';
import BounceDemo from './components/demos/bounce';
import PulseDemo from './components/demos/pulse';
import FadeInDemo from './components/demos/fade-in';
import FadeOutDemo from './components/demos/fade-out';
import SlideUpDownDemo from './components/demos/slide-up-down';
import './App.css';

function App() {
  const handelEffectSelectionDropdown = (event) => {
    const value = event.target.value;
    navigate(`${value}`);
  };
  const currentPath = window.location.pathname;

  return (
    <div className="App">
      <div className="page-header">
        <h2 onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          Simple Animation library
        </h2>
        <label htmlFor="effects">Effect: </label>
        <select
          data-testid="effect-selector"
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
        <Homepage path="/" />
        <BounceDemo path="/bounce" />
        <PulseDemo path="/pulse" />
        <FadeInDemo path="/fade-in" />
        <FadeOutDemo path="/fade-out" />
        <SlideUpDownDemo path="/slide-up-down" />
      </Router>
    </div>
  );
}

export default App;
