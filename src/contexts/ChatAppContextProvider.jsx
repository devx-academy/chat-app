import React from 'react'
import { Subject, BehaviorSubject } from 'rxjs'
import { STOMP_STATES } from '../services/api'

export const ChatAppContext = React.createContext()

const initChatContext = (username) => {
  let receivedMessages = []

  const chatConnectionState$ = new BehaviorSubject(STOMP_STATES.DISCONNECTED)
  const receivedMessages$ = new BehaviorSubject(receivedMessages)
  const sendMessages$ = new Subject()

  return {
    user: {
      login: username,
    },
    connection: {
      connectionState$: chatConnectionState$,
    },
    receivedMessages$,
    sendMessages$,
    receiveMessage: (message) => {
      receivedMessages = [...receivedMessages, message]
      receivedMessages$.next(receivedMessages)
    },
    sendMessage: (message) => sendMessages$.next(message)
  }
}

export default (props) => {
  return (
    <ChatAppContext.Provider value={initChatContext(props.username)}>
      {props.children}
    </ChatAppContext.Provider>
  )
}
