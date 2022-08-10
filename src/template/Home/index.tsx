import Base from '../Base';
import * as S from './style';
import Hero from '../../components/Hero'
import Technologies from '../../components/Technologies';
import Projects from '../../components/Projects';
import { Button } from 'web3-components'
import { Icons as I } from '../../components/@shared';
import GeneralModal from '../../components/GenerateModal';

type Props = {
  title?: string;
};

const Home = ({ title = 'Home' }: Props) => {
  return (
    <S.Container>
      <S.Main>
        <S.Title>Developers Portfolio</S.Title>
        <S.Subtitle>Create a detailed portfolio less than 5 minutes. Show your projects, knowledge technologies and more.</S.Subtitle>  
        <S.WrapperButtons>
          {/*@ts-ignore */}
          <Button.Transparent width='200px' style={{ borderRadius: '10px', margin: '0 1%' }}><I.GithubIcon width={25} color="white" /> Try it with github</Button.Transparent>
        </S.WrapperButtons>
        </S.Main>
      <S.Image src={'assets/developerporfolio.png'} />
      <GeneralModal />
    </S.Container>
  )
}

export default Home;