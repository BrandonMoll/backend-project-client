import React, {Component} from 'react';

import NotLoggedIn from './notLoggedIn';
import Notes from '../notes/notes';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            userProfile: ''
        }
    }

    componentDidMount() {
        this.setState({loggedIn: this.props.auth.isAuthenticated()});
        
    };

    

    render() {
        return (
            <div>
        {this.state.loggedIn ? <Notes {...this.props} auth={this.props.auth} /> : <NotLoggedIn /> }
            </div>
        )
    }
}