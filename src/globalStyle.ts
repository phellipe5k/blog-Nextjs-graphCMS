import { createGlobalStyle, css } from 'styled-components';
import { Theme } from './themes/type';
 
const GlobalStyle = createGlobalStyle`
    ${ ({ theme }) => {
        const { font }: Theme = theme;
        return css`
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${font.family};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        }    
    ` }
    }

`;
 
export default GlobalStyle;