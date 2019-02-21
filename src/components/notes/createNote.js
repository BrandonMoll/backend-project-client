import React, {Component} from 'react';
import Textarea from 'react-textarea-autosize';

export default class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }

    inputHandler= (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
      }

    render() {
        return (
            <div className='createNoteContainer'>
             <Textarea 
                className='createNoteTextArea' 
                placeholder='Title' 
                name='title'  
                value={this.state.title} 
                onChange={this.inputHandler} />

             <p className='noteContent'>
                <Textarea 
                    className='noteContent createNoteTextArea' 
                    placeholder='Type your note here' 
                    name='content' 
                    value={this.state.content} 
                    onChange={this.inputHandler} />
            </p>
               <button onClick={() => this.props.createNote(this.state.title, this.state.content)}>Submit</button>
            </div>
        )
    }
}