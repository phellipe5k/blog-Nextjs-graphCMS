import { Technology as TechnologyTypes } from '../../types/profile';
import * as S from './style';
import Icon from '../Icon';
import TechnologiesInfo from '../@shared/technologies';
import Knowledge from '../Knowledge';

type Props = {
  data: TechnologyTypes;
};

const Technology = ({ data }: Props) => {
  const { Icon: TechIcon, documentationUrl } = TechnologiesInfo[data?.slug];

  return (
    <S.Container>
      <Icon
        redirectURI={documentationUrl}
        type='icon'
        content={TechIcon}
        name={TechIcon}
        size={55}
      />
      <S.Info>
        <S.Title>{data?.name}</S.Title>
        <Knowledge rate={ data.knowledge } />
      </S.Info>
    </S.Container>
  );
}

export default Technology;