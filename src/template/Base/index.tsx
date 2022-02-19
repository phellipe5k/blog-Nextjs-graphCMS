import Header from '../../components/Header';
import * as S from './style';

interface Base {
    children: React.ReactNode
}

const Base = ({ children }: Base) => {

    return (
        <S.Container>
            <Header />
            { children }
        </S.Container>
    )

}

export default Base;
