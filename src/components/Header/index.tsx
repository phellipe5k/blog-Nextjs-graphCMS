import * as S from './style';
import Logo from '../../assets/logo_dark_theme.png'
import { Link, useLocation } from 'react-router-dom';

type Props = {
  title?: string;
};

const Header = ({ title = 'Header' }: Props) => {
  const { pathname: page } = useLocation();
  return (
    <S.Container>
      <S.LogoWrapper>
        <S.Logo src={ Logo } />
      </S.LogoWrapper>
      <S.Nav>
        <S.Link selected={page == '/'} to="/">Home</S.Link>
        <S.Link selected={page == '/projects'} to="/projects">Projects</S.Link>
      </S.Nav>
    </S.Container>
  );
}

export default Header;