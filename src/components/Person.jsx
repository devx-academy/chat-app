import React from 'react'

import { Icon } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'

const Person = (props) => {
  const { lastMessage, name } = props
  return (
    <div className="person-wrapper">
      <div className="person-icon">
        <Icon icon={IconNames.PERSON} />
      </div>
      <div>
        <p className="bp3-text-large">{name}</p>
        {lastMessage && <p className="person-last-message bp3-text-muted">{lastMessage}</p>}
      </div>
    </div>
  )
}

export default Person
