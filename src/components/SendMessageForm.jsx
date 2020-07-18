import React, { useState } from 'react'
import sendMessageConnector from '../hocs/sendMessageConnector'

const SendMessageForm = ({ sendMessage }) => {
  const [message, setMessage] = useState('')

  return (
    <>
      <br />
      <span>Zprava: </span><input value={message} onChange={(e) => setMessage(e.target.value || '')}/>
      <button onClick={() => {
        sendMessage(message)
        setMessage('')
      }}>Odeslat</button>
    </>
  )
}

export default sendMessageConnector(SendMessageForm)
