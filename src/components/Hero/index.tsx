import Icon from '../Icon';
import { useContext } from 'react';
import ProfileContext from '../../Provider/Context';
import { Profile } from '../../types/profile';
import { getSimpleName } from '../../util';
import * as S from './style';
import { Icons as I } from '../@shared';

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
        <S.ImageCasting>
          <S.Image src={ profile.profileImageUrl } />
        </S.ImageCasting>
        <S.IconsRow>
          { !!profile.githubProfileUrl && (
            <Icon
              size={40}
              type="icon"
              tooltip
              name="Github"
              redirectURI={profile.githubProfileUrl}
              content={<I.GithubIcon />}
            />
          ) }
          
          { !!profile.linkedInUrl && (
            <Icon
              size={40}
              type="icon"
              tooltip
              name="LinkedIn"
              redirectURI={profile.linkedInUrl}
              content={<I.LinkedinIcon />}
            />
          ) }
          
          { !!profile.instagramUrl && (
            <Icon
              size={40}
              type="icon"
              tooltip
              name="Insagram"
              redirectURI={profile.instagramUrl}
              content={<I.InstagramIcon />}
            />
          ) }

          
          { !!profile.twitterUrl && (
            <Icon
              size={40}
              type="icon"
              tooltip
              name="Twitter"
              redirectURI={profile.twitterUrl}
              content={<I.TwitterIcon />}
            />
          ) }
          
        </S.IconsRow>
      </S.ImageWrapper>
    </S.Container>
  );
}

export default Hero;