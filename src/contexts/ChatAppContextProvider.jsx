import React, { useState } from 'react'
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs'

export const ChatAppContext = React.createContext()

const initChatContext = () => ({
  receivedMessages$: new BehaviorSubject([]),
  sendMessages$: new Subject(),
  sendMessage: (message) => this.sendMessages$.next(message)
})

export default (props) => {
  return (
    <ChatAppContext.Provider value={initChatContext()}>
      {props.children}
    </ChatAppContext.Provider>
  )
}
