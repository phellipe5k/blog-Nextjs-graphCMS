import { useContext, useState } from 'react';
import ProfileContext from '../../Provider/Context';
import { Technology } from '../../types/profile';
import * as S from './style';

type Props = {
  title?: string;
};

const Technologies = ({ title = 'Technologies' }: Props) => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [{ profile }, loading] = useContext(ProfileContext);
  console.log(profile, 'asdasd') 
  return (
    <S.Container>
      technologies
    </S.Container>
  );
}

export default Technologies;