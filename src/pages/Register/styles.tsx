import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p.register{
        font-size: 12px;
        margin-top: 10px;
        color: #EEFFFF;
        span{
            color: #B3E9FA;
            text-decoration: underline;
            cursor: pointer;
            margin-left: 2px;
            &:hover{
                color: #EEFFFF;
            }
        }
    }
`

export const InputContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    div{
        display: flex;
        flex-direction: column;
        position: relative;
        label{
            color: #EEFFFF;
        }
        & + div{
            margin-top: 10px;
        }
        span{
            position: absolute;
            top: 36px;
            left: 12px;
        }
    }
`