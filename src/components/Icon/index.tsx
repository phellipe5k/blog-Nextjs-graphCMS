import * as S from './style';

type Props = {
  title?: string;
};

const Icon = ({ title = 'Icon' }: Props) => (
  <S.Container>
    <S.Title>{title}</S.Title>
  </S.Container>
);

export default Icon;