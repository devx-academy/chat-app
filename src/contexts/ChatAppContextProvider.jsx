import React from 'react'
import { Subject, BehaviorSubject } from 'rxjs'
import { getStompClient, STOMP_STATES } from '../services/api'

export const ChatAppContext = React.createContext()

const initChatContext = (username) => {
  // TODO 1 - inicializace kontextu s Observables
  let receivedMessages = []
  const chatConnectionState$ = new BehaviorSubject(STOMP_STATES.DISCONNECTED)
  const receivedMessages$ = new BehaviorSubject(receivedMessages)
  const subscription$ = new BehaviorSubject(null)
  const sendMessages$ = new Subject()

  const receiveMessage = (message) => {
    receivedMessages = [...receivedMessages, message]
    receivedMessages$.next(receivedMessages)
  }

  // TODO 2 - stream drzici stav pripojeni na websocket
  const stompClient = getStompClient("wss://chat-app.devx-conf.dtforce.com/api/websocket", chatConnectionState$)
  chatConnectionState$.subscribe(value => {
    if (value === STOMP_STATES.CONNECTED) {
      subscription$.next(
        // pokud odeslu na #app - tak prijimam na /topic/channel/app
        // pokud odeslu na @user - tak prijimam na /topic/pm/user
        // TODO 5 - prace s prijatymi zpravami
        stompClient.subscribe("/topic/channel/all", function (frame) {
          receiveMessage(JSON.parse(frame.body))
        })
      )
    }
  })

  return {
    user: {
      login: username,
    },
    connection: {
      connectionState$: chatConnectionState$,
      client: stompClient,
    },
    receivedMessages$,
    sendMessages$,
    receiveMessage: receiveMessage,
    sendMessage: (message) => sendMessages$.next(message)
  }
}

export default (props) => {
  return (
    <ChatAppContext.Provider value={initChatContext(props.name)}>
      {props.children}
    </ChatAppContext.Provider>
  )
}
