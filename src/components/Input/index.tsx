import * as S from './style';

type Props = {
  title?: string;
};

const Input = ({ title = 'Input' }: Props) => (
  <S.Container>
    { title }
  </S.Container>
);

export default Input;