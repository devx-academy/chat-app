import React from 'react'
import receivedMessageConnector from '../hocs/receivedMessageConnector'
import { map } from 'rxjs/operators'
import Message from './Message'

const MessagesWindow = ({ messages }) => {
  return (
    <div className="message-container">
      {/*<Message
        incoming
        message="Nulla non lectus sed nisl molestie malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos"
      />
      <Message message="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Fusce wisi." />
      <Message incoming message="Class aptent taciti sociosqu ad litora torquent per conubia nostr" />
      <Message message="per inceptos hymenaeos" />*/}
      {messages.map((msg) => <Message incoming={msg.sender === 'Jakub'} message={msg.body} />)}
    </div>
  )
}

export default receivedMessageConnector((stream$) => stream$.pipe(
  map((msgs) => msgs.map((msg) => {
    return {
      body: `${new Date()} - ${msg.body}`,
      sender: msg.sender
    }
  }))
))(MessagesWindow)
