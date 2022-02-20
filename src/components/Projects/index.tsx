import * as S from './style';

type Props = {
  title?: string;
};

const Projects = ({ title = 'Project' }: Props) => (
  <S.Container>
    <S.Title>Projects</S.Title>
    <S.ProjectsWrapper>
      
    </S.ProjectsWrapper>
  </S.Container>
);

export default Projects;