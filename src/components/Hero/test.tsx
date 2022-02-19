import { render, screen } from '@testing-library/react';

import Hero from '.';

describe('<Hero />', () => {
  const { container } = render(<Hero />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /Hero/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});