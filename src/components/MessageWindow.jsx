import React, { useContext, useEffect, useState } from 'react'
import { ChatAppContext } from '../contexts/ChatAppContextProvider'

export default () => {
  const chatContext = useContext(ChatAppContext)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const msgSubscription = chatContext.receivedMessages$.subscribe((msgs) => {
      setMessages(msgs)
    })

    return () => msgSubscription.unsubscribe()
  }, [chatContext])

  return (
    <div>
      <div>
        <button onClick={() => {
          chatContext.receivedMessages$.next([...messages, 'jedna'])
        }}>
          new message
        </button>
      </div>
      {messages.map((msg) => <div>{`zprava: ${msg}`}</div>)}
    </div>
  )
}
