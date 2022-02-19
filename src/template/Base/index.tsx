import * as S from './style';

interface Base {
    children: React.ReactNode
}

const Base = ({ children }: Base) => {

    return (
        <S.Container>
            { children }
        </S.Container>
    )

}

export default Base;
