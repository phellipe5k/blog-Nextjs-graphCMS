import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Theme } from 'themes/type';

export const Container = styled(motion.section)`
    ${ ({ theme } ) => {
        const { colors, spacings }: Theme = theme;
        return css`
        height: 400px;
        width: 100%;
        display: flex;
    ` 
    }}
`

export const Name = styled(motion.h1)`
    ${ ({ theme } ) => {
        const { colors, font }: Theme = theme;
        return css`
        font-size: calc(${font.sizes.huge} + 85px);
        color: ${colors.primary};
        width: 30%;
        line-height: 120px;
        
        ` 
    }}
`

export const Role = styled(motion.h3)`
    ${ ({ theme } ) => {
        const { colors, font }: Theme = theme;
        return css`
        font-size: calc(${font.sizes.huge});
        color: ${colors.darkerPrimary};
        width: 100%;
        ` 
    }}
`

export const AboutMe = styled(motion.h5)`
    ${ ({ theme } ) => {
        const { colors, font, spacings }: Theme = theme;
        return css`
        color: ${colors.textLight};
        font-weight: ${ font.normal };
        font-size: ${font.sizes.small};
        width: 100%;
        margin-top: ${ spacings.outside.medium };
        
        ` 
    }}
`
export const Info = styled(motion.div)`
    ${ ({ theme } ) => {
        const { colors, font, spacings }: Theme = theme;
        return css`
        width: 65%;
        
        ` 
    }}
`

export const ImageWrapper = styled(motion.div)`
    ${ ({ theme } ) => {
        const { colors, font, spacings, layers }: Theme = theme;
        return css`
        width: 35%;
        display: flex;
        justify-content: center;
        align-items: center;
        ` 
    }}
`

export const  ImageCasting = styled(motion.div)`
${ ({ theme } ) => {
    const { colors, font, spacings, layers }: Theme = theme;
    return css`
    width: 75%;
    position: relative;
    &:before {
        content: '';
        position: absolute;
        right: -6%;
        bottom: -6%;
        width: 94%;
        height: 94%;
        border-radius: 15px;
        border: 3px solid ${colors.primary};
        z-index: ${ layers.neutron };
    }
    ` 
}}
`

export const Image = styled(motion.img)`
    ${ ({ theme } ) => {
        const { colors, layers ,font, spacings }: Theme = theme;
        return css`
            width: 100%;
            border-radius: 15px;
            position: relative;
            z-index: ${ layers.overlay };
        ` 
    }}
`