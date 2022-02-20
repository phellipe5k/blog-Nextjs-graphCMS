import * as S from './style';

type Props = {
  title?: string;
};

const Input = ({ title = 'Input' }: Props) => (
  <S.Container>
    <S.Title>{title}</S.Title>
  </S.Container>
);

export default Input;