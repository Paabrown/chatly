import React, { Component } from 'react';
import db from '../firebase/db';
import config from '../config';
import ChatRoom from './ChatRoom';

// to-dos
// sanitize inputs
// display who's typing
// make sure the messages are sorted

// NOTE TO SELF - JUST TAKE THE EVENTS OUT OF THE ROOMS
// THAT WILL SOLVE ALMOST ALL OF YOUR PROBLEMS
// YOU CAN STORE MESSAGE ON THE TOP LEVEL OF THE APP

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: {},
      currentUser: {}
    }

    this.addMessage.bind(this);
  }

  componentDidMount() {
    db.Rooms.once('value', data => {
      const initialRoomsState = data.val();
      console.log('room', initialRoosState);
      this.setState({
        rooms: initialRoomsState
      });
    });

    db.Rooms.on('child_added', data => {
      // add the room to state (no need for this feature currently)
    });

    db.Rooms.on('child_removed', data => {
      // add the room to state (no need for this feature currently)
    });
  }

  addMessages(messagesToAdd, roomId) {
    this.setState(prevState => {
      const { rooms } = prevState;
      const messages = rooms[roomId].messages || {}
      Object.assign(messages, )
      return { rooms };
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
      addMessage={this.addMessage}
    />
  }
}

export default App;
