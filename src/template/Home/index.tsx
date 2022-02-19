import Base from '../Base';
import * as S from './style';
import Hero from '../../components/Hero'

type Props = {
  title?: string;
};

const Home = ({ title = 'Home' }: Props) => {
  return (
    <Base>
    <S.Container>
      <Hero />
    </S.Container>
    </Base>
  )
}

export default Home;