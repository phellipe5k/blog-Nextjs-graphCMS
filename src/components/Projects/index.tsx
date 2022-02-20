import { useContext, useEffect, useState } from 'react';
import ProfileContext from '../../Provider/Context';
import * as S from './style';
import Project from '../Project';
import { Project as ProjectTypes } from '../../types/profile';
import { useLocation } from 'react-router';

type Props = {
  title?: string;
};

const Projects = ({ title = 'Project' }: Props) => {
  const [projects, setProjects] = useState<ProjectTypes[]>([]);
  const [{ profile }, loading] = useContext(ProfileContext);
  const { pathname } = useLocation();

  useEffect(() => {
    if (profile) {  
      setProjects(profile.projects);
    }
  }, [profile])
  return (
    <S.Container>
      { pathname == '/' && <S.Title>Projects</S.Title> }
      <S.ProjectsWrapper>
        { !!projects.length && projects.map((project, index) => index <= 1 ? <Project key={index} data={ project } /> : null) }
        { (projects.length >= 2 && pathname == '/') && <S.Link to="/projects"><S.Link to="/projects">See more Projects</S.Link></S.Link>}
      </S.ProjectsWrapper>
    </S.Container>
  );
}

export default Projects;