import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root'));


// const auth = new Auth();

// let state = {};
// window.setState = (changes) => {
//     state = Object.assign({}, state, changes);

//     ReactDOM.render(
//             <App {...state} />
//         , document.getElementById('root'));
// };
// /* eslint no-restricted-globals: 0*/
// let initialState = {
//     name: 'Brandon',
//     location: location.pathname.replace(/^\/?|\/$/g, ""),
//     auth
// }

// window.setState(initialState);


