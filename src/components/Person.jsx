import React from 'react'

import { Icon } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'

const Person = (props) => {
  return (
    <div className="person-wrapper">
      <div className="person-icon">
        <Icon icon={IconNames.PERSON} />
      </div>
      <div>
        <p className="bp3-text-large">name</p>
        <p className="bp3-text-muted">last message last message alast message a</p>
      </div>
    </div>
  )
}

export default Person
