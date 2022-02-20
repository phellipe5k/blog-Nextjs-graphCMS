import { render, screen } from '@testing-library/react';

import GenerateModal from '.';

describe('<GenerateModal />', () => {
  const { container } = render(<GenerateModal />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /GenerateModal/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});