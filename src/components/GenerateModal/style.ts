import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Theme } from '../../themes/type';

export const Container = styled(motion.section)`
    ${ ({ theme } ) => {
        const { colors }: Theme = theme;
        return css`
        height: 100vh;
        width: 100%;
        background-color: white;
        
    ` 
    }}
`

export const Section = styled(motion.section)`
    padding: 2%;
    border: 1px solid #E8E8E8;
    margin: 2%;
    border-radius: 6px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

export const SectionTitle = styled(motion.h3)`
    display: flex;
    align-items: center;
    
`

export const Content = styled(motion.div)`

`;

export const IconWrapper = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid #E8E8E8;
    margin-right: 6px;
`;