import React from 'react'
import Person from '../components/Person'
import Message from '../components/Message'

class ChatContainer extends React.Component {
  render() {
    return (
      <div className="chat-container">
        <Person name="Tom" />
        <div className="message-container">
          <Message
            incoming
            message="Nulla non lectus sed nisl molestie malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos"
          />
          <Message message="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Fusce wisi." />
          <Message incoming message="Class aptent taciti sociosqu ad litora torquent per conubia nostr" />
          <Message message="per inceptos hymenaeos" />
        </div>
      </div>
    )
  }
}

export default ChatContainer
