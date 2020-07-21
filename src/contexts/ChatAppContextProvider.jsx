import React from 'react'
import { Subject, BehaviorSubject } from 'rxjs'
import { getStompClient, STOMP_STATES } from '../services/api'

export const ChatAppContext = React.createContext()

const initChatContext = (username) => {
  let receivedMessages = []
  let subscription;

  const chatConnectionState$ = new BehaviorSubject(STOMP_STATES.DISCONNECTED)
  const receivedMessages$ = new BehaviorSubject(receivedMessages)
  const subscription$ = new Subject()
  const sendMessages$ = new Subject()

  const receiveMessage = (message) => {
    receivedMessages = [...receivedMessages, message]
    receivedMessages$.next(receivedMessages)
  }

  const stompClient = getStompClient("ws://localhost:8080/gs-guide-websocket", chatConnectionState$)
  chatConnectionState$.subscribe(value => {
    console.log(value);
    if (value === STOMP_STATES.CONNECTED) {
      subscription$.next(
        // pokud odeslu na #app - tak prijimam na /topic/channel/app
        // pokud odeslu na @user - tak prijimam na /topic/pm/user
        stompClient.subscribe("/topic/channel/all", function (frame) {
          console.log(JSON.parse(frame.body))
          receiveMessage(JSON.parse(frame.body));
        })
      )
    }
  })

  sendMessages$.subscribe(value => {
    // zatim posilam zpravy taky pres STOMP, ale muzu udelat i ten endpoint
    stompClient.publish({destination: '/app/message/#all', body: JSON.stringify({
        body: value,
        sender: username
    })});
  })

  return {
    user: {
      login: username,
    },
    connection: {
      connectionState$: chatConnectionState$,
      client: stompClient,
      subscription: subscription
    },
    receivedMessages$,
    sendMessages$,
    receiveMessage: receiveMessage,
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
