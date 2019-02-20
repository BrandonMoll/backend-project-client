import React, {Component} from 'react';
import Textarea from 'react-textarea-autosize';

import './notes.css'

export default class SingleNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentHidden: true,
            textAreaHidden: true,
            title: this.props.title,
            content: this.props.content
        }
    }

    showNoteHandler = () => {
        this.setState({ contentHidden: !this.state.contentHidden })
    }

    editHiddenHandler = () => {
        this.setState({ textAreaHidden: !this.state.textAreaHidden, contentHidden: !this.state.contentHidden })
    }

    inputHandler= (e) => {
        this.setState({ [e.target.name]: e.target.value })
      }

      
    

    render() {
        return (
            <div className='singleNoteContainer'>
                <span className='noteTitle' onClick={this.showNoteHandler}>{this.props.title}</span>
                <p className='noteContent' hidden={this.state.contentHidden}>{this.props.content}</p>
                <Textarea className='textArea' value={this.state.content} onChange={this.inputHandler} name='content' hidden={this.state.textAreaHidden} />
                <div className='noteOptions' >
                    <span hidden={this.state.contentHidden} onClick={this.editHiddenHandler} className='cursorPointer'>Edit</span>
                    <span hidden={this.state.contentHidden} className='cursorPointer' onClick={() => this.props.deleteNote(this.props.id)}>Delete</span>
                </div>
            </div>
        )
    }
}