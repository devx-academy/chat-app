import React from 'react'
import receivedMessageConnector from '../hocs/receivedMessageConnector'
import { bufferCount, map } from 'rxjs/operators'
import Message from './Message'

const MessagesWindow = ({ messages, loggedUser }) => {
  return (
    <div className="message-container">
      {messages.map((msg) => <Message key={msg.id} incoming={msg.sender !== loggedUser} message={msg.body} />)}
    </div>
  )
}

export default receivedMessageConnector((stream$) => stream$.pipe(
  map((msgs) => msgs.map((msg) => {
    return {
      ...msg,
      body: `${msg.sender} says: ${msg.body}`
    }
  }))
))(MessagesWindow)
