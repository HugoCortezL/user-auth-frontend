import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    padding: 40px 26px;
    background: linear-gradient(162.39deg, #33CBFB 0%, #339BFB 100%);
    h1.title{
        color: #EEFFFF;
        font-size: 36px;
        font-weight: normal;
    }
    p.description{
        color: #EEFFFF;
        font-size: 20px;
        text-align: center;
    }
    @media (min-width: 1040px){
        display: flex;
        flex-direction: row;
    }
`

export const WebImage = styled.div`
    background: url("https://images.unsplash.com/photo-1511883040705-6011fad9edfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80");
    background-size: cover;
    display: none;
    width: 50%;
    height: 100%;
    margin-right: 50px;
    @media (min-width: 1040px){
        display: inline-block;
    }
`

export const ActionContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 1040px){
        width: 50%;
    }
`