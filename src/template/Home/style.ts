import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Theme } from '../../themes/type';

export const Container = styled(motion.section)`
    ${ ({ theme } ) => {
        const { colors, spacings }: Theme = theme;
        return css`
        height: 100%;
        width: 100%;
        margin:  0 auto;
        background-color: #09011c;
        padding: ${ spacings.inside.huge };
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    ` 
    }}
`

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: #bfbfbf;
  text-align: center;
  font-size: 100px;
  font-family: Lexend, sans-serif !important;
text-shadow:
    0 0 50px ${'#5d28a1'};
`;

export const Subtitle = styled.h3`
  color: #ababab;
  font-size: 16px;
  text-align: center;
  font-weight: lighter;
  margin: 0.5% 0 3% 0;

  font-family: Lexend, sans-serif !important;
`;

export const Image = styled.img`
  width: 75%;
  margin-top: 100px;
  border-radius: 17px;
  
`;

export const WrapperButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;