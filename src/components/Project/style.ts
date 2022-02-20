import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Theme } from '../../themes/type';

export const Container = styled(motion.section)`
    ${ ({ theme } ) => {
        const { colors, spacings }: Theme = theme;
        return css`
        width: 100%;
        display: flex;
        margin: calc(${spacings.outside.xhuge } + 20px) 0;
    ` 
    }}
`


export const Title = styled(motion.h3)`
    ${ ({ theme } ) => {
        const { colors, font, spacings }: Theme = theme;
        return css`
            display: flex;
            font-size: ${ font.sizes.large };
            font-weight: ${ font.bold };
            color: ${ colors.subDarkBg };
    ` 
    }}
`

export const RightContent = styled(motion.div)`
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    position: relative;
`

export const Share = styled(motion.div)`
    ${({ theme }) => {
        const { colors }: Theme = theme;
        return css`
            position: absolute;
            top: 0;
            right: 0;
            width: 30%;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: space-around;
        `
    }}
`;


export const MainImageWrapper = styled(motion.div)`
    width: 55%;
    
`

export const MainImage = styled(motion.img)`
    width: 100%;
    height: 100%;
    border-radius: 13px;
`;


export const Description = styled(motion.div)`
    ${({ theme }) => {
        const { spacings, colors }: Theme  = theme;
        return css`
            width: calc(100% + 95px);
            height: 130px;
            border-radius: 13px;
            position: relative;
            left: 0px;
            background-color: ${ colors.darkerPrimary };
            padding: calc(${spacings.inside.medium} + 5px);
            color: ${ colors.background };
        `
    }}
`;


export const Technologies = styled(motion.div)`
    ${({ theme }) => {
        const { colors, spacings }: Theme = theme;
        return css`
        display: flex;
        width: 95%;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-top: ${ spacings.outside.xxsmall };
        
        `
    }}
`;