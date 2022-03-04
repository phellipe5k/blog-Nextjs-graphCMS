import * as S from './style';
import { Icons as I } from '../@shared';
import { Project as ProjectTypes } from '../../types/profile';
import Icon  from '../Icon';
import TechnologiesInfo from '../@shared/technologies';

type Props = {
  data: ProjectTypes;
};

const Project = ({ data }: Props) => {
  console.log(data, 'HAHAHAHHA');
  return (
    <S.Container>
      <S.MainImageWrapper>  
        <S.MainImage 
        //@ts-ignore
        src={ data.image[2].url } />
      </S.MainImageWrapper>
      <S.RightContent>
        <S.Share>
          <Icon redirectURI={data.githubRepository} tooltip name={'Github Repository'} type="icon" size={50} content={<I.GithubIcon />} />
          <Icon redirectURI={data.website} tooltip name={'Demo'} type="icon" size={50} content={<I.ShareIcon />} />
        
        </S.Share>
        <S.Title>{data.title}</S.Title>
        <S.Description>
          { data.description } Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa quia repudiandae voluptatibus dignissimos
        </S.Description>
        <S.Technologies>
          {
            !!data.technologies.length &&
            data.technologies.map(tech => {
              console.log(tech.slug)
              // @ts-ignore
              const { Icon: IconO, documentationUrl } = TechnologiesInfo[tech.slug];
              return <Icon redirectURI={documentationUrl} tooltip name={tech.name} type="icon" size={30} content={IconO}/>
               })
          }
        </S.Technologies>
      </S.RightContent>
    </S.Container>
  );
}

export default Project;