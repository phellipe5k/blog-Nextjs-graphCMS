import * as S from './style';

type Props = {
  title?: string;
};

const GenerateModal = ({ title = 'GenerateModal' }: Props) => (
  <S.Container>
    <S.Title>{title}</S.Title>
  </S.Container>
);

export default GenerateModal;