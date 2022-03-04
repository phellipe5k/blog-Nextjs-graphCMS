import { Technology as TechnologyTypes } from '../../types/profile';
import * as S from './style';
import Icon from '../Icon';
import TechnologiesInfo from '../@shared/technologies';
import Knowledge from '../Knowledge';
import { useState } from 'react';

type Props = {
  data: TechnologyTypes;
};

const Technology = ({ data }: Props) => {
  // @ts-ignore
  const { Icon: TechIcon, documentationUrl } = TechnologiesInfo[data?.slug];
  const [active, setActive] = useState<boolean>(false);

  return (
    <S.Container
      target={'_blank'}
      href={documentationUrl}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <Icon
        active={ active }
        redirectURI={documentationUrl}
        type='icon'
        content={TechIcon}
        name={TechIcon}
        size={50}
      />
      <S.Info>
        <S.Title>{data?.name}</S.Title>
        <Knowledge rate={ data.knowledge } />
      </S.Info>
    </S.Container>
  );
}

export default Technology;