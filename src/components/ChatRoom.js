import React, { Component } from 'react';
import MessageDisplay from './MessageDisplay';
import MessageEntry from './MessageEntry';

class ChatRoom extends Component {
  componentDidMount() {
    const { roomId } = this.props;
    db.Rooms.child(roomId).child('events').on('childAdded', () => {
      
    })
  }

  render() {
    const { room, currentUser } = this.props;
    const { messages, events } = room;

    return (
      <div>
        <MessageDisplay />
        <MessageEntry />
      </div>
    )
  }
}




export default ChatRoom;