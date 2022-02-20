import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Theme } from '../../themes/type';

export const Container = styled(motion.section)`
    ${ ({ theme } ) => {
        const { colors, spacings }: Theme = theme;
        return css`
        width: 100%;
        justify-content: center;
        display: flex;
    ` 
    }}
`


export const ProjectsWrapper = styled(motion.section)`
    ${ ({ theme } ) => {
        const { colors, spacings }: Theme = theme;
        return css`
        width: 80%;
        display: flex;
        margin-bottom: 40px;
    ` 
    }}
`