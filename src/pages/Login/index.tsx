import {Container, InputContainer} from './styles'
import LoginRegisterLayout from '../../Layouts/LoginRegister'

import {FaUserAlt} from 'react-icons/fa'
import {AiFillLock} from 'react-icons/ai'

export default function Home(){
    return(
        <LoginRegisterLayout>
            <div>
                <h1 className="title">Welcome</h1>
                <p className="description">Create Account</p>
            </div>
            <InputContainer>
                <div>
                    <label>Email / Username</label>
                    <input type="email" className="input"/>
                    <span>
                        <FaUserAlt size={22} color="#33CBFB"/>
                    </span>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" className="input"/>
                    <span>
                        <AiFillLock size={22} color="#33CBFB"/>
                    </span>
                    <div className="remember">
                        <div>
                            <input type="checkbox"/>
                            <label>Remember-me</label>
                        </div>
                        <p>Forgot password ?</p>
                    </div>
                </div>
            </InputContainer>
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