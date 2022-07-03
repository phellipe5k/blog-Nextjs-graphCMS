import * as S from './style';
import {useRouter } from 'next/router';
import Link from 'next/link';

type Props = {
  title?: string;
};

const Header = ({ title = 'Header' }: Props) => {
  const router = useRouter();
  const page = router.pathname;
  const { slug } = router.query;
  return (
    <S.Container>
      <S.LogoWrapper>
      </S.LogoWrapper>
      <S.Nav>
        <Link href={`/${slug}`}><S.Link selected={page == '/[slug]'}>Home</S.Link></Link>
        <Link href={`/${slug}/projects`}><S.Link selected={page.includes('projects')}>Projects</S.Link></Link>
      </S.Nav>
    </S.Container>
  );
}

export default Header;