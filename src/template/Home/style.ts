import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Theme } from '../../themes/type';

export const Container = styled(motion.section)`
    ${ ({ theme } ) => {
        const { colors, spacings }: Theme = theme;
        return css`
        height: 100vh;
        width: 100%;
        background-color: ${ colors.darkBg };
        padding: ${ spacings.inside.huge };
        
    ` 
    }}
`