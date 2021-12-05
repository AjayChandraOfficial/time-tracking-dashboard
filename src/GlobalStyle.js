import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,*:before,*:after,h1,h2,h3,h4,h5,h6{
    margin:0;
    padding:0;
    overflow:hidden;
}
body{
    font-family:"Rubik",sans-serif;
    overflow:hidden;
}

`;

export default GlobalStyle;
