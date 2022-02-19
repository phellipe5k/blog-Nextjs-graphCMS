import { useContext } from 'react';
import ProfileContext from '../../Provider/Context';
import { Profile } from '../../types/profile';
import * as S from './style';

type Props = {
  title?: string;
};

const Hero = ({ title = 'Hero' }: Props) => {
  const [{ profile: profileCtx, setProfile }, loading, error] = useContext(ProfileContext);
  const profile: Profile = profileCtx;
  if (loading || !profile) return <h1>Carregando...</h1>
  return (
    <S.Container>
      <h1>{profile.name}</h1>
      <h1>{profile.githubProfileUrl}</h1>
    </S.Container>
  );
}

export default Hero;