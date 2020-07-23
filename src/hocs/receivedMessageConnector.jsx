import React, { useContext, useEffect, useState } from 'react'
import { ChatAppContext } from '../contexts/ChatAppContextProvider'

export default (extendObservablePipe) => (WrappedComponent) => (props) => {
  const chatContext = useContext(ChatAppContext)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    // TODO 6 - stream zpracovavajici prijate zpravy
    const msgSubscription = (extendObservablePipe ? extendObservablePipe(chatContext.receivedMessages$) :
        chatContext.receivedMessages$
    ).subscribe((msgs) => setMessages(msgs))

    return () => msgSubscription.unsubscribe()
  }, [])

  return <WrappedComponent {...props} messages={messages} />
}
