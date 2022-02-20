import { render, screen } from '@testing-library/react';

import Technologies from '.';

describe('<Technologies />', () => {
  const { container } = render(<Technologies />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /Technologies/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});