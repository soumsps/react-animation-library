import React from 'react';
import renderer from 'react-test-renderer';
import { SlideUpDown } from '../slide-up-down';

it('slideUpDown effect snapshot test', () => {
  const tree = renderer.create(<SlideUpDown></SlideUpDown>).toJSON();
  expect(tree).toMatchSnapshot();
});
