import { render, screen } from '@testing-library/react';

import Header from '.';

describe('<Header />', () => {
  const { container } = render(<Header />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /Header/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});