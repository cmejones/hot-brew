import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';


import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up.js'
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  // handles firebase auth
  unsubscribeFromAuth = null;

  componentDidMount() {
    // from firebase auth; auth persistence
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/signin' component={SignInAndSignUpPage}  />
        </Switch>
      
    </div>
  );
  }
  
}

export default App;
