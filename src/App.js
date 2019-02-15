import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Auth from './components/login/auth';
import Home from './components/home/home';
import NotLoggedIn from './components/home/notLoggedIn';
import Callback from './components/callback';
import Login from './components/login/login'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    const auth = new Auth();
    return (
      <div className="App">
        <Route exact path='/' render={(props) => <Login auth={auth} /> } />
        <Route path='/callback' render={(props) => <Callback /> } />
        <Route exact path='/home' render={(props) => <Home auth={auth} /> } />
        <Route path='/fail' component={NotLoggedIn} />
        
      </div>
    );
  }
}

export default App;


// class App extends Component {
//   render() {
//     let mainComponent = "";
//     switch(this.props.location) {
//       case "":
//         mainComponent = <Main {...this.props} />;
//         break;
//       case "callback":
//         mainComponent = <Callback />;
//         break;
//       case "secret":
//         mainComponent = this.props.auth.isAuthenticated() ? <Secret {...this.props}/> : <NotFound />;
//         break;
//       default:
//         mainComponent = <NotFound />
//     }
//     return (
//       <div className="App">
//         {mainComponent}
//       </div>
//     );
//   }
// }
