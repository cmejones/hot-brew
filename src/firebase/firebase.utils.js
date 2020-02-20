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
 
firebase.initializeApp(firebaseConfig);
  
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;