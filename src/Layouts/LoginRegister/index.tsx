import {Container,ActionContainer, WebImage} from './styles'

export default function LoginRegisterLayout(props:any){
    return(
        <Container>
            <WebImage/>
            <ActionContainer>
                {props.children}
            </ActionContainer>
        </Container>
    )
}