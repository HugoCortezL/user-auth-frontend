import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body{
        background-color: var(--white);
        font-size: 13px;
        font-family: 'Poppins';
        -webkit-font-smoothing: antialiased !important;
        -webkit-text-size-adjust: 100% !important;
    }
    button{
        font-family: 'Nunito';
        letter-spacing: 1px;
        -webkit-font-smoothing: antialiased !important;
        -webkit-text-size-adjust: 100% !important;
    }
    a{
        text-decoration: none;
    }
`