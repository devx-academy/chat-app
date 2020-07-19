import React from 'react'

import { Callout } from '@blueprintjs/core'

const Message = (props) => {
  const { incoming, message } = props
  return (
    <div className={`message-wrapper ${incoming ? 'message-wrapper__in' : 'message-wrapper__out'}`}>
      <Callout className={incoming ? '' : 'bp3-intent-primary'}>{message}</Callout>
    </div>
  )
}

export default Message
