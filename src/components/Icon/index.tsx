import useMousePosition from '../../hooks/useMousePosition';
import { useState } from 'react';
import * as S from './style';


type Props = {
  type?: 'svg' | 'image' | 'icon';
  size?: number;
  color?: string;
  content?: any;
  redirectURI?: any;
  name?: string;
  tooltip?: boolean;
};

const Icon = ({ type = 'svg', tooltip, size, color, name, content, redirectURI }: Props) => {
  const [hovering, setHovering] = useState(false);
  const { clientX, clientY } = useMousePosition();
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
      case 'icon':
        return (
          (
            <S.Container onMouseOver={ () => setHovering(true) } onMouseLeave={ () => setHovering(false) } target={"__blank"} href={redirectURI} size={size}>
              <S.SvgWrapper>
                { content }
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
      { !!tooltip && <S.Tooltip left={clientX + 20} top={clientY - 30} active={hovering}>{name}</S.Tooltip> }
    </S.Wrapper>
  )
}

export default Icon;