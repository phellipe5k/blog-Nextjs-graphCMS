import { render, screen } from '@testing-library/react';

import Project from '.';

describe('<Project />', () => {
  const { container } = render(<Project />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /Project/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});