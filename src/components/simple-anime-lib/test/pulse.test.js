import React from 'react';
import renderer from 'react-test-renderer';
import { Pulse } from '../pulse';

it('pulse effect snapshot test', () => {
  const tree = renderer.create(<Pulse></Pulse>).toJSON();
  expect(tree).toMatchSnapshot();
});
