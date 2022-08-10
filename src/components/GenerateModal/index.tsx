import * as S from './style';
import { Icons as I } from '../@shared';
import { createElement } from 'react';

type Props = {
  title?: string;
};

type SectionType = {
  title: string;
  children: any;
  Icon?: any;
}

const Section = ({ Icon, title = 'Social Media', children }: SectionType) => {
  return (
    <S.Section>
      <S.SectionTitle><S.IconWrapper>{ Icon }</S.IconWrapper> { title }</S.SectionTitle>
      <S.Content>{ children }</S.Content>
    </S.Section>
  )
}

const GenerateModal = ({ title = 'GenerateModal' }: Props) => (
  <S.Container>
    { title }
    <Section Icon={ <I.InformationIcon size={20} color="black" /> } title="General Info">
      asd
    </Section>
    <Section Icon={ <I.NotificationIcon size={20} color="black" /> } title="Link your socials">
      asd
    </Section>
    <Section Icon={ <I.StackIcon size={20} color="black" /> } title="Your skills">
      asd
    </Section>
    <Section Icon={ <I.BuildIcon size={20} color="black" /> } title="Projects">
      asd
    </Section>
  </S.Container>
);

export default GenerateModal;