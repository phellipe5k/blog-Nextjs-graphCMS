import { Theme } from './type';
import { generateMedia } from 'styled-media-query';

const main: Theme =  {
    font: {
      family: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      light: 300,
      normal: 400,
      bold: 'bold',
      sizes: {
        title: '70pt',
        subtitle: '30pt',
        small: '12pt',
        medium: '16pt',
        xmedium: '20pt',
        large: '28pt',
        huge: '35pt',
      }
    },
    borderRadius: {
      input: '10px',
      button: '7px',
      rounded: '50%',
    },
    colors: {
      primary: '#0098FF',
      secondary: '#ffffff',
      textLight: '#c4c4c4',
      textDark: '#656565', 
      lightBg: '#292929',
      subLightBg: '#313131',
      darkBg: 'rgba(27, 29, 29, 1)',
      subDarkBg: '#C4C4C4',
      background: '#ECECEC',
      darkerPrimary: '#0E72B7',
      darkFooter: '#303030',
    },
    borderNoColor: '2px solid',
    transition: {
      default: '450ms ease-in-out',
      fast: '250ms ease-in-out',
      slow: '650ms ease-in-out',
    },
    icons: {
      menu: '45px',
      small: '20px',
      medium: '30px',
      huge: '50px',
    },
    spacings: {
      inside: {
        small: '1%',
        medium: '2%',
        huge: '5%',
      },
      outside: {
        xxsmall: '10px',
        xsmall: '15px', 
        small: '25px',
        medium: '35px',
        xmedium: '50px',
        huge: '75px',
        xhuge: '100px',
      },
    },
    layers: {
      disappear: -90,
      neutron: 0,
      base: 10,
      dropDown: 20,
      menu: 30,
      overlay: 40,
      modal: 50,
      alwaysOnTop: 60,
    },
    medias: {
      desktop: '1100px',
      tablet: '870px',
      mobile: '615px'
    },
  }

  export const mediaQuery = generateMedia({
    desktop: main.medias.desktop,
    tablet: main.medias.desktop,
    mobile: main.medias.mobile,
  })
  
  export default main;
  