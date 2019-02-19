import React, {Component} from 'react';
import axios from 'axios';

import SingleNote from './singleNote';

export default class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userProfile: '',
            notes: []
        }
    }

    componentDidMount() {
        this.setState({ userProfile: this.props.auth.getProfile() })
        this.getNotes();
    }

    getNotes = () => {
        axios.get('https://notesbackend.herokuapp.com/api/notes')
        .then(response => {
          this.setState({ notes: response.data })
        })
        .catch(err => console.log('error getting notes', err))
      }
  
      createNote = (title, text) => {
        axios.post('https://notesbackend.herokuapp.com/api/notes', {
          title: title,
          content: text
        })
        .then(response => {
          this.getNotes();
        })
        .catch(err => console.log('error creating note', err)) 
      }
  
      deleteNote = (id) => {
        axios.delete(`https://notesbackend.herokuapp.com/api/notes/${id}`)
        .then(response => {
          this.getNotes();
        })
        .catch(err => console.log('error deleting note', err))
      }
  
      editNote = (id, title, text) => {
        axios.put(`https://notesbackend.herokuapp.com/api/notes/${id}`, {
          title: title,
          content: text
        })
        .then(response => {
          this.getNotes();
        })
        .catch(err => console.log('Error editing note', err))
      }

    render() {
        return (
            <div>
                <p>Notes page</p>
                <p>Welcome {this.state.userProfile.given_name}</p>
                {this.state.notes.map(note => {
                    return (
                        <SingleNote key={note.id} title={note.title} content={note.content} />
                    )
                })}
                <button onClick={this.props.auth.logout}>Logout</button>
            </div>
        )
    }
}