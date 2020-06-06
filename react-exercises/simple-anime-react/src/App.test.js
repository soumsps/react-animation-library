import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Is Application successfully rendering', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Simple Animation library/i);
  expect(linkElement).toBeInTheDocument();
});

test('Effect selector rendered on screen', () => {
  const { getByTestId } = render(<App />);
  const element = getByTestId('effect-selector');
  expect(element.tagName).toEqual('SELECT');
});
