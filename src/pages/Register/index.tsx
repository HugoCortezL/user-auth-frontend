import {Container, InputContainer} from './styles'
import LoginRegisterLayout from '../../Layouts/LoginRegister'

import {FaUserAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {AiFillLock} from 'react-icons/ai'

import { Link } from "react-router-dom";

export default function Register(){
    return(
        <LoginRegisterLayout>
            <div>
                <h1 className="title">Welcome</h1>
                <p className="description">Create Account</p>
            </div>
            <InputContainer>
                <div>
                    <label>Username</label>
                    <input type="text" className="input"/>
                    <span>
                        <FaUserAlt size={22} color="#33CBFB"/>
                    </span>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" className="input"/>
                    <span>
                        <MdEmail size={22} color="#33CBFB"/>
                    </span>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" className="input"/>
                    <span>
                        <AiFillLock size={22} color="#33CBFB"/>
                    </span>
                </div>
            </InputContainer>
            <Container>
                <button className="btn">
                    Register
                </button>
                <p className="register">
                    Have account ? 
                    <Link to={`/login`}>
                        <span>Login</span>
                    </Link>
                </p>
            </Container>
        </LoginRegisterLayout>
    )
}