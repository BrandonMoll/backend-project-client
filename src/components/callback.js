import React, {Component} from 'react';
import Auth from './login/auth';
let Spinner = require('react-spinkit');

export default class Callback extends Component {
    componentDidMount() {
        const auth = new Auth();
        auth.handleAuthentication();
    }
    render() {
        return (
            <div>
                <Spinner />
            </div>
        )
    }
}