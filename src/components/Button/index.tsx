import * as S from './style';

type Props = {
  title?: string;
};

const Button = ({ title = 'Button' }: Props) => (
  <S.Container>
    { title }
  </S.Container>
);

export default Button;