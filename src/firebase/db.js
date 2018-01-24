import fire from './firebase.js';

// in the backend, these will be arranged in a more relational manner
const db = {
  'Users': fire.database().ref('users'),
  'Rooms': fire.database().ref('rooms')
}

export default db;
