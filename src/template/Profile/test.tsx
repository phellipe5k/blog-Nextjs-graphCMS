import { render, screen } from '@testing-library/react';

import Home from '.';

describe('<Home />', () => {
  const { container } = render(<Home />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /Home/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});