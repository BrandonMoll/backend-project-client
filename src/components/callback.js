import React, {Component} from 'react';
import Auth from './login/auth';

export default class Callback extends Component {
    componentDidMount() {
        const auth = new Auth();
        auth.handleAuthentication();
    }
    render() {
        return (
            <div>
                Loading...
            </div>
        )
    }
}