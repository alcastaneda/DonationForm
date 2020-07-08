import React from 'react';
import { render } from 'react-testing-library';

import App from './App';

it('should render without crashing', () => {
  render(<App />);
});

it('should match the snapshot', () => {
  const { container } = render(<App />);

  expect(container.firstChild).toMatchSnapshot();
});
