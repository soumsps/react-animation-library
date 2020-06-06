import React from 'react';
import renderer from 'react-test-renderer';
import { FadeIn } from '../fade-in';

it('fade-in effect snapshot test', () => {
  const tree = renderer.create(<FadeIn></FadeIn>).toJSON();
  expect(tree).toMatchSnapshot();
});
