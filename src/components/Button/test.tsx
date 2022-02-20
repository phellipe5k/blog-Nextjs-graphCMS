import { render, screen } from '@testing-library/react';

import Button from '.';

describe('<Button />', () => {
  const { container } = render(<Button />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /Button/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});