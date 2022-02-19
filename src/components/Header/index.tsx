import * as S from './style';

type Props = {
  title?: string;
};

const Header = ({ title = 'Header' }: Props) => (
  <S.Container>
    <S.Title>{title}</S.Title>
  </S.Container>
);

export default Header;