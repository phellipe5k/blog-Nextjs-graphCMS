import { render, screen } from '@testing-library/react';

import Technology from '.';

describe('<Technology />', () => {
  const { container } = render(<Technology />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /Technology/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});