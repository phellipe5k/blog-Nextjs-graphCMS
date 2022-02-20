import Base from '../Base';
import * as S from './style';
import Hero from '../../components/Hero'
import Technologies from '../../components/Technologies';

type Props = {
  title?: string;
};

const Home = ({ title = 'Home' }: Props) => {
  return (
    <Base>
    <S.Container>
      <Hero />
      <Technologies />
    </S.Container>
    </Base>
  )
}

export default Home;