import React, { useState } from 'react'
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs'

export const ChatAppContext = React.createContext()

const initChatContext = () => {
  let receivedMessages = []
  const receivedMessages$ = new BehaviorSubject(receivedMessages)
  const sendMessages$ = new Subject()

  return {
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
    <ChatAppContext.Provider value={initChatContext()}>
      {props.children}
    </ChatAppContext.Provider>
  )
}
