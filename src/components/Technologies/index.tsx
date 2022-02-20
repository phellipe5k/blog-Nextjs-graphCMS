import { useContext, useEffect, useState } from 'react';
import ProfileContext from '../../Provider/Context';
import { Technology as TechnologyTypes } from '../../types/profile';
import Technology from '../Technology';
import * as S from './style';

type Props = {
  title?: string;
};

const Technologies = ({ title = 'Technologies' }: Props) => {
  const [technologies, setTechnologies] = useState<TechnologyTypes[]>([]);
  const [{ profile }, loading] = useContext(ProfileContext);

  useEffect(() => {
    if (profile) {
      setTechnologies(profile.technologies);
    }
  }, [profile]);

  return (
    <S.Container>
      <S.Title>Knowledge</S.Title>
      <S.TechnologiesWrapper>
        { !!technologies && technologies.map(tech => <Technology key={tech.slug} data={ tech } />) }
      </S.TechnologiesWrapper>
    </S.Container>
  );
}

export default Technologies;