import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Theme } from '../../themes/type';

export const Container = styled(motion.section)`
    ${ ({ theme } ) => {
        const { colors, spacings }: Theme = theme;
        return css`
        width: 100%;
        margin-top: ${ spacings.outside.xxsmall };
        display: flex ;
    ` 
    }}
`
interface Square {
    opacity: number,
    active: boolean
}

export const Square = styled(motion.section)<Square>`
    ${ ({ theme, active, opacity } ) => {
        const { colors, spacings }: Theme = theme;
        return css`
            width: 100%;
            width: 18px;
            height: 8px;
            border: 1px solid ${colors.textLight};
            margin-right: calc(${ spacings.outside.xxsmall } - 2px);
            border-radius: 2px;
            opacity: ${opacity};
            background-color: ${ active && colors.primary };
    ` 
    }}
`
