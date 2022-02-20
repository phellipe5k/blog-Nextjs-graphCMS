import * as S from './style';

type Props = {
  rate: number;
};

const Knowledge = ({ rate }: Props) => (
  <S.Container>
    <S.Square opacity={0.4} active={ rate >= 1 }></S.Square>
    <S.Square opacity={0.6} active={ rate >= 2 }></S.Square>
    <S.Square opacity={0.75} active={ rate >= 3 }></S.Square>
    <S.Square opacity={0.8} active={ rate >= 4 }></S.Square>
    <S.Square opacity={1} active={ rate == 5 }></S.Square>
  </S.Container>
);

export default Knowledge;