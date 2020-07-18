import React from 'react'

import { Alignment, Classes, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core'

import '../styles/App.scss'
import PeopleContainer from './PeopleContainer'
import ChatContainer from './ChatContainer'

function App() {
  return (
    <div className="app">
      <div className={`${Classes.DARK} full-size`}>
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Chat App</NavbarHeading>
            <NavbarDivider />
          </NavbarGroup>
        </Navbar>
        <div className="row">
          <PeopleContainer />
          <ChatContainer />
        </div>
      </div>
    </div>
  )
}

export default App
