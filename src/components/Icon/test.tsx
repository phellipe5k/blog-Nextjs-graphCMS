import { render, screen } from '@testing-library/react';

import Icon from '.';

describe('<Icon />', () => {
  const { container } = render(<Icon />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /Icon/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});