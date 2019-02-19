import React, {Component} from 'react';

export default class SingleNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <p>{this.props.content}</p>
            </div>
        )
    }
}