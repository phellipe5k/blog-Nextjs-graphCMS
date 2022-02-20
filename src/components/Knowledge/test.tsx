import { render, screen } from '@testing-library/react';

import Knowledge from '.';

describe('<Knowledge />', () => {
  const { container } = render(<Knowledge />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /Knowledge/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});