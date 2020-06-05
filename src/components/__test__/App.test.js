import React from 'react';
import { render } from '@testing-library/react';
import App from 'components/App';

test('should render App without crashing', () => {
  const appComponent = render(<App />);
});
