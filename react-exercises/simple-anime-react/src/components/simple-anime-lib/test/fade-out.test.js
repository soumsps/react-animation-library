import React from 'react';
import renderer from 'react-test-renderer';
import { FadeOut } from '../fade-out';

it('fade-out effect snapshot test', () => {
  const tree = renderer.create(<FadeOut></FadeOut>).toJSON();
  expect(tree).toMatchSnapshot();
});
