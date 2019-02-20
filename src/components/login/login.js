import React from 'react';
import './login.css';

import google from '../../assets/google.png'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div className='loginContainer'>
                <h1 className="loginHeader">Welcome to The Notes App</h1>
                <img src={google} onClick={this.props.auth.login} className="google" />
                
                
            </div>
        )
    }
}

export default Login