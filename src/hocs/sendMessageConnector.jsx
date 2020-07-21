import React, { useContext, useEffect } from 'react'
import { when } from 'ramda'
import { ChatAppContext } from '../contexts/ChatAppContextProvider'
import { map } from 'rxjs/operators'

export default (WrappedComponent) => (props) => {
  const chatContext = useContext(ChatAppContext)

  useEffect(() => {
    const sendMessage$ = chatContext.sendMessages$.pipe(
      map((msg) => ({from: chatContext.user.login, message: msg})),
      map(when(
        (msgObj) => (msgObj.message || '').match(/^\[[^ ?\]\(\)]*\]\:.*$/),
        (msgObj) => {
          const parsedMessage = msgObj.message.match(/(\[[^ ?\]\(\)]*\]\:)(.*)/)
          return {
            to: parsedMessage[1].substring(1, parsedMessage[1].length - 2),
            message: (parsedMessage[2] || '').trim(),
          }
        }
      )),
      // TODO: call BE to send an email when ...
    )
    sendMessage$.subscribe((msg) => {
      console.log('zprava', msg)
      // TODO: call BE to send message
    })
  }, [])

  return (<WrappedComponent {...props} sendMessage={chatContext.sendMessage} />)
}
