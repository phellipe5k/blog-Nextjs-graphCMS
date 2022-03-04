import * as S from './style';

type Props = {
  title?: string;
};

const GenerateModal = ({ title = 'GenerateModal' }: Props) => (
  <S.Container>
    { title }
  </S.Container>
);

export default GenerateModal;