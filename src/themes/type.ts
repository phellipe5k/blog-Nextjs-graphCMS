export interface Theme {
    font: {
      family: string,
      light: number,
      normal: number,
      bold: string,
      sizes: {
        title: string,
        subtitle: string,
        small: string,
        medium: string,
        xmedium: string,
        large: string,
        huge: string,
      }
    },
    borderRadius: {
      input: string,
      button: string,
      rounded: string,
    },
    colors: {
      primary: string,
      secondary: string,
      textLight: string,
      textDark: string, 
      lightBg: string,
      subLightBg: string,
      darkBg: string,
      subDarkBg: string,
      background: string,
      darkerPrimary: string,
      darkFooter: string,
    },
    borderNoColor: string,
    transition: {
      default: string,
      fast: string,
      slow: string,
    },
    icons: {
      menu: string,
      small: string,
      medium: string,
      huge: string,
    },
    spacings: {
      inside: {
        small: string,
        medium: string,
        huge: string,
      },
      outside: {
        xxsmall: string,
        xsmall: string, 
        small: string,
        medium: string,
        xmedium: string,
        huge: string,
        xhuge: string,
      },
    },
    layers: {
      disappear: number,
      neutron: number,
      base: number,
      dropDown: number,
      menu: number,
      overlay: number,
      modal: number,
      alwaysOnTop: number,
    },
    medias: {
      desktop: string,
      tablet: string,
      mobile: string
    },
  }