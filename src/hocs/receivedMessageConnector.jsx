import React, { useContext, useLayoutEffect, useEffect, useState } from 'react'
import { ChatAppContext } from '../contexts/ChatAppContextProvider'

export default (observableCallback) => (WrappedComponent) => (props) => {
  const chatContext = useContext(ChatAppContext)
  const [messages, setMessages] = useState([])

  useLayoutEffect(() => {
    const msgSubscription = (observableCallback ? observableCallback(chatContext.receivedMessages$) :
        chatContext.receivedMessages$
    ).subscribe((msgs) => setMessages(msgs))

    return () => msgSubscription.unsubscribe()
  }, [])

  return (<>
    <div><button onClick={() => {
      chatContext.receiveMessage('jedna')
    }}>generate message</button></div>
    <WrappedComponent {...props} messages={messages}/>
  </>)
}
