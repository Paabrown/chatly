import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyC0FDEyFkYqfJPsM4D8Dg80q0jx5fh1t0g",
  authDomain: "chatly-b6c57.firebaseapp.com",
  databaseURL: "https://chatly-b6c57.firebaseio.com",
  projectId: "chatly-b6c57",
  messagingSenderId: "535573554793"
};

const fire = firebase.initializeApp(config);

export default fire;