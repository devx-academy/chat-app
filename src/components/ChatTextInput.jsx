import React, { useState } from 'react'

import { InputGroup, Button } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import sendMessageConnector from '../hocs/sendMessageConnector'

const ChatTextInput = ({ sendMessage }) => {
  const [msg, setMsg] = useState('')

  return (
    <div className="chat-text-input">
      <InputGroup
        placeholder="write your message here ..."
        large
        rightElement={<Button icon={IconNames.SEND_MESSAGE} onClick={() => sendMessage(msg)} />}
        onChange={(value) => setMsg(value.target.value)}
        value={msg}
      />
    </div>
  )
}

export default sendMessageConnector(ChatTextInput)
