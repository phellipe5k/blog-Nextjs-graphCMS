import * as S from './style';
import Logo from '../../assets/logo_dark_theme.png'
import { Link } from 'react-router-dom';

type Props = {
  title?: string;
};

const Header = ({ title = 'Header' }: Props) => (
  <S.Container>
    <S.LogoWrapper>
      <S.Logo src={ Logo } />
    </S.LogoWrapper>
    <S.Nav>
      <S.Link to="/">Home</S.Link>
      <S.Link to="/">Projects</S.Link>
    </S.Nav>
  </S.Container>
);

export default Header;