import React from 'react';

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
            <div>
                <h1>Welcome to The Notes App</h1>
                <button onClick={this.props.auth.login}>Login with Google</button>
            </div>
        )
    }
}

export default Login