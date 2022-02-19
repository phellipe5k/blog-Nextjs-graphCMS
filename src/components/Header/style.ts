import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Theme } from '../../themes/type';
import { Link as LinkRRD } from 'react-router-dom';

export const Container = styled(motion.section)`
  ${ ({ theme } ) => {
      const { colors, spacings }: Theme = theme;
      return css`
      height: 70px;
      width: 100%;
      display: flex;
      justify-content: center;
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

export const Link = styled(LinkRRD)`
  ${ ({ theme, selected }: { selected: boolean }) => {
    const { colors, font, transition }: Theme = theme;
    return css`
      text-decoration: none;
      color: ${colors.textLight};
      font-size: ${ font.sizes.medium };
      font-weight: ${ font.bold };
      padding: 0 16px;
      transition: ${transition.fast};
      &:hover{
        color: ${colors.darkerPrimary};
      }
      ${ selected && css`
        color: ${ colors.primary }
      ` }

    `
  }}
`

export const Logo = styled(motion.img)`
  width: 180px;
`