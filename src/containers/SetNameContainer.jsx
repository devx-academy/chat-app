import React, { useState } from 'react'
import { Button, InputGroup } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'

const SetNameContainer = (props) => {
  const [tempName, setTempName] = useState('')

  const { onSetName } = props
  return (
    <div className="set-name-container-container">
      <InputGroup
        placeholder="write your name here ..."
        large
        rightElement={
          <Button
            icon={IconNames.SAVED}
            onClick={() => {
              onSetName(tempName)
            }}
          />
        }
        onChange={(value) => setTempName(value.target.value)}
        value={tempName}
      />
    </div>
  )
}

export default SetNameContainer
