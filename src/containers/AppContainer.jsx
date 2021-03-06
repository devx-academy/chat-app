import React, { useState } from 'react'

import { Alignment, Classes, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core'

import '../styles/App.scss'
import PeopleContainer from './PeopleContainerFunctional'
import ChatContainer from './ChatContainer'

import ChatAppContextProvider from '../contexts/ChatAppContextProvider'
import SetNameContainer from './SetNameContainer'

function App() {
  const [name, setName] = useState('')

  return (
    <div className="app">
      <div className={`${Classes.DARK} full-size`}>
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Chat App</NavbarHeading>
            <NavbarDivider />
            <NavbarHeading>devx.conf 2020</NavbarHeading>
          </NavbarGroup>
        </Navbar>
        {name ? (
          <div className="row">
            {/* TODO - TOM: vykreslit form pro zadani a pres state nacpat nize do `name` propsy */}
            <ChatAppContextProvider name={name}>
              {/*<PeopleContainer />*/}
              <ChatContainer />
            </ChatAppContextProvider>
          </div>
        ) : (
          <div className="row">
            <SetNameContainer onSetName={setName} name={name} />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
