import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Theme } from '../../themes/type';

export const Container = styled(motion.section)`
    ${ ({ theme } ) => {
        const { colors, spacings }: Theme = theme;
        return css`
        width: 100%;
        display: flex;
        margin: ${ spacings.outside.small };
        cursor: pointer;
    ` 
    }}
`

export const Title = styled(motion.h3)`
    ${ ({ theme } ) => {
        const { colors, font }: Theme = theme;
        return css`
            font-size: ${ font.sizes.medium };
            color: ${ colors.textLight };
            font-weight: ${ font.normal };
    ` 
    }}
`
export const Info = styled(motion.section)`
    ${ ({ theme } ) => {
        const { colors }: Theme = theme;
        return css`
        width: 100%; 
    ` 
    }}
`
