import {Container} from './styles'
import LoginRegisterLayout from '../../Layouts/LoginRegister'

export default function Home(){
    return(
        <LoginRegisterLayout>
            <h1 className="title">Welcome</h1>
            <p className="description">Here you will have the most support in personal finance in one place</p>
            <Container>
                <button className="btn">
                    Login
                </button>
                <p className="register">
                    Don't have account ? <span>Register</span>
                </p>
            </Container>
        </LoginRegisterLayout>
    )
}