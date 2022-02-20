import Projects from "../../components/Projects"
import Base from "../Base";
import * as S from './style';

const ProjectsTemplate = () => {

    return (
        <Base>
        <S.Container>
            <S.ProjectsWrapper>
                <Projects /> 
            </S.ProjectsWrapper>
        </S.Container>
        </Base>
    )
}

export default ProjectsTemplate;
