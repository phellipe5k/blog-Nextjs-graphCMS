import { useState } from 'react';
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
  const [hovering, setHovering] = useState(false);
  const renderIcon = () => {
    switch(type) {
      case 'svg':
        return (
          (
            <S.Container onMouseOver={ () => setHovering(true) } onMouseLeave={ () => setHovering(false) } target={"__blank"} href={redirectURI} size={size}>
              <S.SvgWrapper dangerouslySetInnerHTML={{ __html: content }}>
                
              </S.SvgWrapper>
            </S.Container>
          )
        )
      default:
        return (
          <S.Container onMouseOver={ () => setHovering(true) } onMouseLeave={ () => setHovering(false) } target={"__blank"} href={redirectURI}  size={ size }>
            <S.Image src={ content } />
          </S.Container>
        );
    }
  }

  return (
    <S.Wrapper>
      {renderIcon()}
      <S.Tooltip active={hovering}>{name}</S.Tooltip>
    </S.Wrapper>
  )
}

export default Icon;