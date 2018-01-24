import React, { Component } from 'react';
import db from '../firebase/db';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUserID: null,
      rooms: []
    }
  }

  componentDidMount() {
    db.on('')
  }

  render() {
    return <div>Hello World!</div>  
  }
}

export default App;
