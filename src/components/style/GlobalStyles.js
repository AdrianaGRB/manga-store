import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `

:root {
    --grey: #131415;
    --pink: #EF233C;
    --yellow: #FFB703;
    --grey-letters: #404040;  
    --light-pink: #F89EA9;
    --light-yellow: #FCD061;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Nunito, Helvetica, Arial;
    list-style: none;
    text-decoration: none;
    
}

a {
    color: #ffff;
}



`

export default GlobalStyles; 