import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/layout/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up';
import Users from './pages/Users';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import ProductList from './components/products/ProductList';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // store user data in firestore
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state);
          
          });
        });
      }
      
      this.setState({ currentUser: userAuth });
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
          <Route path='/users' component={Users}  />
          <Route path='/products' component={ProductList}  />
        </Switch>
      
    </div>
  );
  } 
}

export default App;
