import * as S from './style';
import {useRouter } from 'next/router';
import Logo from '../../assets/logo_dark_theme.png'
import Link from 'next/link';

type Props = {
  title?: string;
};

const Header = ({ title = 'Header' }: Props) => {
  const router = useRouter();
  const page = router.pathname;
  return (
    <S.Container>
      <S.LogoWrapper>
        <S.Logo src={ Logo } />
      </S.LogoWrapper>
      <S.Nav>
        <Link href="/"><S.Link selected={page == '/'}>Home</S.Link></Link>
        <Link href="/projects"><S.Link selected={page == '/projects'}>Projects</S.Link></Link>
      </S.Nav>
    </S.Container>
  );
}

export default Header;