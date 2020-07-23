import React, { useContext } from 'react'
import Person from '../components/Person'
import ChatTextInput from '../components/ChatTextInput'
import MessagesWindow from '../components/MessagesWindow'
import { ChatAppContext } from '../contexts/ChatAppContextProvider'

export default () => {
  const chatContext = useContext(ChatAppContext)

  return (
    <div className="chat-container">
      <div className="chat-person">
        <Person name={chatContext.user.login} />
      </div>
      <MessagesWindow loggedUser={chatContext.user.login}/>
      <ChatTextInput/>
    </div>
  )
}
