import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import './notes.css';

import SingleNote from './singleNote';
import CreateNote from './createNote';

let Spinner = require('react-spinkit');

export default class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            googleProfile: '',
            dbUserProfile: '',
            notes: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true, googleProfile: this.props.auth.getProfile() })
        this.getNotes();
    };

    getUser = () => {
      axios.get(`https://notesbackend.herokuapp.com/api/users/finduser/${this.state.googleProfile.nickname}`)
      .then(response => {
        console.log('axios response', response)
        this.setState({ dbUserProfile: response.data })
      })
      .catch(err => {
        console.log('error', err)
      })
    };

    getNotes = () => {
        axios.get('https://notesbackend.herokuapp.com/api/notes')
        .then(response => {
          this.setState({ notes: response.data, loading: false })
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
      .catch(err => console.log('error creating note', err));
      this.props.history.push('/home')
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
      // this.getUser();
      // console.log(this.state.dbUserProfile)
        return (
            <div className='notesContainer'>
                <h2 className='notesHeader'>{this.state.googleProfile.given_name}'s Notes</h2>

                {this.state.loading ? <Spinner /> : 
                  this.state.notes.map(note => {
                    return (  <Route exact path='/home' key={note.id} render={(props) =>  <SingleNote 
                                key={note.id}
                                id={note.id} 
                                title={note.title} 
                                content={note.content}
                                editNote={this.editNote}
                                deleteNote={this.deleteNote} /> } /> )})
                }

                <Route exact path='/home/createnote' render={(props) => <CreateNote createNote={this.createNote} /> } />
                  
                <button onClick={this.props.auth.logout}>Logout</button>
                <Link to='/home/createnote'><button>Create note</button></Link>

            </div>
        )
    }
}