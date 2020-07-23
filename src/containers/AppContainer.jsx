import React from 'react'

import { Alignment, Classes, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core'

import '../styles/App.scss'
import PeopleContainer from './PeopleContainerFunctional'
import ChatContainer from './ChatContainer'

import ChatAppContextProvider from '../contexts/ChatAppContextProvider'

function App() {
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
        <div className="row">
          <ChatAppContextProvider username="Jakub">
            <PeopleContainer />
            <ChatContainer />
          </ChatAppContextProvider>
        </div>
        {/*<div className="row">
          <ChatAppContextProvider username="Jakub">
            <MessageWindow />
            <SendMessageForm />
          </ChatAppContextProvider>
        </div>*/}
      </div>
    </div>
  )
}

export default App
