import * as S from './style';


type Props = {
  type?: 'svg' | 'image';
  size?: number;
  color?: string;
  content?: any;
  redirectURI?: any;
  name?: string;
};

const Icon = ({ type = 'svg', size = 40, color, name = 'Next Js', content, redirectURI }: Props) => {
  const renderIcon = () => {
    switch(type) {
      case 'svg':
        return (
          (
            <S.Container target={"__blank"} href={redirectURI} size={size}>
              <S.SvgWrapper dangerouslySetInnerHTML={{ __html: content }}>
                
              </S.SvgWrapper>
            </S.Container>
          )
        )
      default:
        return (
          <S.Container target={"__blank"} href={redirectURI}  size={ size }>
            <S.Image src={ content } />
          </S.Container>
        );
    }
  }

  return (
    <S.Wrapper>
      {renderIcon()}
      <S.Tooltip>{name}</S.Tooltip>
    </S.Wrapper>
  )
}

export default Icon;