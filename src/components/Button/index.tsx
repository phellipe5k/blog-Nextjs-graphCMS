import * as S from './style';

type Props = {
  title?: string;
};

const Button = ({ title = 'Button' }: Props) => (
  <S.Container>
    <S.Title>{title}</S.Title>
  </S.Container>
);

export default Button;