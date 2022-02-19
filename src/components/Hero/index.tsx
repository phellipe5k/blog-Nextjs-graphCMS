import { useContext } from 'react';
import ProfileContext from '../../Provider/Context';
import { Profile } from '../../types/profile';
import { getSimpleName } from '../../util';
import * as S from './style';

type Props = {
  title?: string;
};

const Hero = ({ title = 'Hero' }: Props) => {
  const [{ profile: profileCtx, setProfile }, loading, error] = useContext(ProfileContext);
  const profile: Profile = profileCtx;
  if (loading || !profile) return <h1>Carregando...</h1>
  const name = getSimpleName(profile.name)

  return (
    <S.Container>
      <S.Info>
        <S.Name>{name}</S.Name>
        <S.Role>{ profile.role }</S.Role>
        <S.AboutMe>{profile.aboutMe?.text}</S.AboutMe>
      </S.Info>
      <S.ImageWrapper>
        <S.Image src={ profile.profileImageUrl } />
      </S.ImageWrapper>
    </S.Container>
  );
}

export default Hero;