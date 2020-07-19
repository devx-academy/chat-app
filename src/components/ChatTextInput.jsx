import React from 'react'

import { InputGroup, Button } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'

const ChatTextInput = (props) => {
  return (
    <div className="chat-text-input">
      <InputGroup
        placeholder="write your message here ..."
        large
        rightElement={<Button icon={IconNames.SEND_MESSAGE} />}
      />
    </div>
  )
}

export default ChatTextInput
