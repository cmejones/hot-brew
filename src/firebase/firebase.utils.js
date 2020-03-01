import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' 

const firebaseConfig = {
  apiKey: "AIzaSyDI53lx0xAPoCOsRSjO2Q_CRGk2Jm0kXiM",
  authDomain: "api-hot-brew.firebaseapp.com",
  databaseURL: "https://api-hot-brew.firebaseio.com",
  projectId: "api-hot-brew",
  storageBucket: "api-hot-brew.appspot.com",
  messagingSenderId: "1090628766284",
  appId: "1:1090628766284:web:32d3dff705b9a5ff80c2e9",
  measurementId: "G-4VXFBV4GY7"
};

// save user info in firestore database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email, 
        createdAt, 
        ...additionalData
      })

    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;

};

// save new products info in firestore database
export const createNewProduct = async (data) => {

  const newProduct = db.collection('products');

      await newProduct.add({
        data
      }).then(ref => {
        console.log('Added document with id: ', ref.id);
      })

  return newProduct;

};

//export const myFirebase = firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

//connect to products database
// const databaseRef = firebase.database().ref();
// export const productsRef = databaseRef.child('products');


export const db = firestore;

export default firebase;