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
        letter-spacing: 1px;
        -webkit-font-smoothing: antialiased !important;
        -webkit-text-size-adjust: 100% !important;
    }

    a{
        text-decoration: none;
    }

    button.btn{
        width: 100%;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background-color: #D1F4FF;
        border: none;
        font-size: 16px;
        color: #33CBFB;
        font-weight: bold;
        cursor: pointer;
        &:hover{
            background-color: #B3E9FA;
        }
    }
`