import React, { Component } from 'react';
import db from '../firebase/db';
import config from '../config';
import ChatRoom from './ChatRoom';

// to-dos
// sanitize inputs
// display who's typing

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: {},
      currentUser: {}
    }
  }

  componentDidMount() {
    // for now, we'll have the top level listen for events from the server/db
    // but depending on how it scales, we can move this down to the room level
    db.Rooms.on('value', data => {
      const rooms = data.val();
      console.log('rooms', rooms);
      this.setState({
        rooms 
      })
    })  
  }

  render() {
    // we're hardcoding the id of the only room for now, but in the future there can be more than one room!
    // once there is also more than one room, there can be an intermediary component where you choose rooms, etc
    const { onlyRoomId } = config;
    const { rooms, currentUser } = this.state;
    const onlyRoom = rooms[onlyRoomId];
    return <ChatRoom
      room={onlyRoom}
      roomId={onlyRoomId}
      currentUser={currentUser}
    />
  }
}

export default App;
