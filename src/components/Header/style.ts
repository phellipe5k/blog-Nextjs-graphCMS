import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Theme } from '../../themes/type';
import { Link as LinkRRD } from 'react-router-dom';

interface LinkProps {
  selected?: boolean;
}

export const Container = styled(motion.section)`
  ${ ({ theme } ) => {
      const { colors, spacings }: Theme = theme;
      return css`
      height: 70px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${ spacings.inside.huge };
  ` 
  }}
`

export const Nav = styled(motion.nav)`
  ${ ({ theme } ) => {
      const { colors }: Theme = theme;
      return css`
      height: 70px;
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
  ` 
  }}
`

export const LogoWrapper = styled(motion.div)`
  ${ ({ theme } ) => {
      const { colors }: Theme = theme;
      return css`
      
      ` 
  }}
`

export const Link = styled(LinkRRD)<LinkProps>`
  ${ ({ theme, selected }) => {
    const { colors, font, transition, spacings }: Theme = theme;
    return css`
      text-decoration: none;
      color: ${colors.textLight};
      font-size: ${ font.sizes.medium };
      font-weight: ${ font.bold };
      padding: 0 16px;
      position: relative;
      transition: ${transition.fast};
      &:before {
          content: '';
          position: absolute;
          width: 0;
          transition: ${ transition.fast };
          height: 3px;
          left: calc(0 + ${ spacings.inside.medium });
          bottom: -3px;
          background-color: ${ colors.primary };
          border-radius: 5px;
        }
      ${ selected ? css`
        color: ${ colors.primary };
      ` : css`
        &:hover{
          color: ${colors.primary};
          &:before {
            width: 50px;
          }
        }
      ` }

    `
  }}
`

export const Logo = styled(motion.img)`
  width: 180px;
`