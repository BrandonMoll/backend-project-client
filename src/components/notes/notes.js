import React, {Component} from 'react';

export default class Notes extends Component {
    render() {
        return (
            <div>
                Notes page
                <button onClick={this.props.auth.logout}>Logout</button>
            </div>
        )
    }
}