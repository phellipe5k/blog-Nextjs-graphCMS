import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Theme } from '../../themes/type';

interface Container {
    size: number;
}

export const Wrapper = styled(motion.div)`
    ${ ({ theme } ) => {
        const { colors, transition }: Theme = theme;
        return css`
        display: flex;
        position: relative;
    ` 
    }}
`

interface Tooltip {
    active?: boolean;
    left?: number;
    top?: number;
}

export const Tooltip = styled(motion.div)<Tooltip>`
    ${ ({ theme, active, left, top }) => {
        const { colors }: Theme = theme;
        return css`
        display: ${active ? 'flex' : 'none' };
        position: ${ active ? 'fixed' : 'absolute' };
        width: 120px;
        border-radius: 4px;
        justify-content: center;
        background-color: red;
        top: ${ active ? `${top}px` : '-30px' };
        left: ${ active ? `${left}px` : '15px' };
        background-color: ${ colors.background };
        color: ${ colors.textDark };
    ` 
    }}
`

export const Container = styled(motion.a)<Container>`
    ${ ({ theme, size } ) => {
        const { colors, transition }: Theme = theme;
        return css`
        width: ${size}px;
        height: ${size}px;
        border-radius: 8px;
        margin: 0 4%;
        cursor: pointer;
        transition: ${transition.fast};

        
    ` 
    }}
`


export const SvgWrapper = styled(motion.div)`
    ${ ({ theme } ) => {
        const { colors, transition }: Theme = theme;
        return css`
        padding: 15%;
        height: 100%;
        width: 100%;
        transition: ${transition.fast};
        svg {
            transition: ${transition.fast};
            width: 100%;
            height: 100%;
            fill: ${ colors.textLight };
            path {
                transition: ${transition.fast};
                fill: ${ colors.textLight };
            }
        }
        &:hover {
            svg {
                fill: ${ colors.primary };
                path {
                    fill: ${ colors.primary };
                }
            }   
        }
        
    ` 
    }}
`
export const Image = styled(motion.img)`
    ${ ({ theme } ) => {
        const { colors }: Theme = theme;
        return css`
            width: 100%;
            height: 100%;
        
    ` 
    }}
`