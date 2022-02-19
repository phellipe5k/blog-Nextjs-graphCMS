import Base from '../Base';
import * as S from './style';

type Props = {
  title?: string;
};

const Home = ({ title = 'Home' }: Props) => {
  return (
    <Base>
      <S.Container>
        asdasd
      </S.Container>
    </Base>
  )
}

export default Home;