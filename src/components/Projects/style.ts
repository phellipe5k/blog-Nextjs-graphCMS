import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Theme } from '../../themes/type';

export const Container = styled(motion.section)`
    ${ ({ theme } ) => {
        const { colors }: Theme = theme;
        return css`
        width: 100%;
        background-color: ${ colors.darkBg };
        
    ` 
    }}
`

export const Title = styled(motion.h3)`
    ${ ({ theme } ) => {
        const { colors, font, spacings }: Theme = theme;
        return css`
            width: 100%;
            display: flex;
            font-size: ${ font.sizes.large };
            font-weight: ${ font.bold };
            color: ${ colors.subDarkBg };
            margin-bottom: ${ spacings.outside.huge };
    ` 
    }}
`

export const ProjectsWrapper = styled(motion.div)`
    
`