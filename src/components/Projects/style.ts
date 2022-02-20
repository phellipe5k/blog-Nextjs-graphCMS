import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Theme } from '../../themes/type';
import { Link as LinkRRD } from 'react-router-dom';

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

export const Link = styled(LinkRRD)`
    ${({ theme }) => {
        const { colors, font, transition }: Theme = theme;
        return css`
           text-decoration: none;
            display: flex;
            width: 100%;
            justify-content: center;
            transition: ${ transition.fast };
            color: ${ colors.textLight };
            font-size: ${  font.sizes.medium };
            font-weight: ${font.light};
            text-shadow:
                0 0 5px ${colors.primary},
                0 0 22px ${colors.primary},
                0 0 5px ${colors.primary};
            
                &:hover {
                    color: ${colors.primary};
                    text-shadow:
                        0 0 5px ${colors.textLight},
                }
            `
    }}   
`
