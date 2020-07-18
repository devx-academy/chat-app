import React from 'react'
import receivedMessageConnector from '../hocs/receivedMessageConnector'
import { map } from 'rxjs/operators'

const MessageWindow = ({ messages }) => {
  return (
    <div>
      {messages.map((msg) => <div>{`zprava: ${msg}`}</div>)}
    </div>
  )
}

export default receivedMessageConnector((stream$) => stream$.pipe(
  map((msgs) => msgs.map((msg) => `${msg} - ${new Date()}`))
))(MessageWindow)
