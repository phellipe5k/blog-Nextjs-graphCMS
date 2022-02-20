import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Theme } from '../../themes/type';

export const Container = styled(motion.a)`
    ${ ({ theme } ) => {
        const { colors, transition ,spacings }: Theme = theme;
        return css`
        width: 33.33%;
        display: flex;
        text-decoration: none;
        margin-bottom: ${ spacings.outside.huge };
        cursor: pointer;
        transition: ${transition.fast};
        &:hover {
            transform: scale(1.1)translateX(15px);
            background-color: transparent;
            h3 {
                color: ${ colors.primary };
            }
        }
    ` 
    }}
`

export const Title = styled(motion.h3)`
    ${ ({ theme } ) => {
        const { colors, font }: Theme = theme;
        return css`
            font-size: ${ font.sizes.medium };
            color: ${ colors.textLight };
            font-weight: ${ font.light };
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
