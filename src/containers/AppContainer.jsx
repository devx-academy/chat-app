import React from 'react'

import { Alignment, Classes, Button, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core'

import '../styles/App.scss'

import ChatAppContextProvider from '../contexts/ChatAppContextProvider'
import MessageWindow from '../components/MessageWindow'
import SendMessageForm from '../components/SendMessageForm'

function App() {
  return (
    <div className="App">
      <div className={Classes.DARK}>
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Chat App</NavbarHeading>
            <NavbarDivider />
            <Button className={Classes.MINIMAL} icon="home" text="Home" />
          </NavbarGroup>
        </Navbar>
        <div>
          app will be there :)
          <ChatAppContextProvider username="Jakub">
            <MessageWindow />
            <SendMessageForm />
          </ChatAppContextProvider>
        </div>
      </div>
    </div>
  )
}

export default App
