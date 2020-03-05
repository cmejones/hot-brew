import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/layout/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up';
import Users from './pages/Users';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import ProductList from './components/products/ProductList';
import ProductDetail from './components/products/ProductDetail';
import CreateProduct from './components/products/CreateProduct';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import EditProduct from './components/products/EditProduct';
import DeleteProduct from './components/products/DeleteProduct';

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
            //console.log(this.state);
          
          });
        });
      }
      //console.log(userAuth);
      localStorage.setItem("userID", userAuth.uid);
      localStorage.setItem("displayName", userAuth.displayName);
      //this.setState({ currentUser: userAuth });
      //console.log('auth', currentUser);
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
          <Route path='/users/:id' component={Users}  />
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/products' component={Products}  />
          <Route path='/products/:id' component={ProductDetail} />
          <Route path='/product/edit/:id' component={EditProduct} />
          <Route path='/product/delete/:id' component={DeleteProduct} />
          <Route path='/create-product' component={CreateProduct} />
        </Switch>
      
    </div>
  );
  } 
}

export default App;
