import React from 'react';
import { FadeIn } from '../simple-anime-lib';
import DemoPic from './demo-pic.jpg';
const FadeInDemo = () => {
  return <div className="demo-content">FadeIn <FadeIn duration="2000"> demo  </FadeIn>  page</div>;
};

export default FadeInDemo;
