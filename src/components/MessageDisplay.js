import React, { Component } from 'react';

class MessageDisplay extends Component {
  render() {
    return <div>{this.props.roomId}</div>
  }
}




export default MessageDisplay;