import React, { useContext, useEffect, useState } from 'react'
import { ChatAppContext } from '../contexts/ChatAppContextProvider'

export default (extendObservablePipe) => (WrappedComponent) => (props) => {
  const chatContext = useContext(ChatAppContext)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const msgSubscription = (extendObservablePipe ? extendObservablePipe(chatContext.receivedMessages$) :
        chatContext.receivedMessages$
    ).subscribe((msgs) => setMessages(msgs))

    return () => msgSubscription.unsubscribe()
  }, [])

  return (<>
    {/*<div><button onClick={() => {
      chatContext.receiveMessage('jedna')
    }}>generate message</button></div>*/}
    <WrappedComponent {...props} messages={messages}/>
  </>)
}
