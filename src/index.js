import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './store/reducers/rootReducer';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { reactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from '../src/firebase/firebase.utils';

// const store = createStore(rootReducer,

//         applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
    
// );

// react-redux-firebase config
// const rrfConfig = {
//     userProfile: 'users',
//   // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
// }

//update to new react redux firebase version
// const rrfProps = {
//     firebase,
//     config: rrfConfig,
//     dispatch: store.dispatch
// }

// const App = () => (
//     <Provider store={store}>
//         <ReactReduxFirebaseProvider {...rrfProps}>

//         </ReactReduxFirebaseProvider>
//     </Provider>
// )

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
