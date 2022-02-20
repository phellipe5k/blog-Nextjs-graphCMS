import { render, screen } from '@testing-library/react';

import Input from '.';

describe('<Input />', () => {
  const { container } = render(<Input />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /Input/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});