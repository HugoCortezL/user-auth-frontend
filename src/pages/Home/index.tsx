import {Container} from './styles'
import LoginRegisterLayout from '../../Layouts/LoginRegister'

import { Link } from "react-router-dom";

export default function Home(){
    return(
        <LoginRegisterLayout>
            <h1 className="title">Welcome</h1>
            <p className="description">Here you will have the most support in personal finance in one place</p>
            <Container>
            <Link to={`/login`}>
                <button className="btn">
                    Login
                </button>
            </Link>
                <p className="register">
                    Don't have account ? 
                    <Link to={`/register`}>
                        <span>Register</span>
                    </Link>
                </p>
            </Container>
        </LoginRegisterLayout>
    )
}