import React, { useContext, useEffect } from 'react'
import { when } from 'ramda'
import { ChatAppContext } from '../contexts/ChatAppContextProvider'
import { map, mergeMap, tap } from 'rxjs/operators'
import { from } from 'rxjs'
import { sendMessage } from '../services/api'

export default (WrappedComponent) => (props) => {
  const chatContext = useContext(ChatAppContext)

  useEffect(() => {
    const sendMessage$ = chatContext.sendMessages$.pipe(
      map((msg) => ({sender: chatContext.user.login, body: msg, receiver: '#all'})),
      // TODO 4 - private message
      map(when(
        (msgObj) => (msgObj.body || '').match(/^(@[^ ?,]).*$/),
        (msgObj) => {
          const parsedMessage = msgObj.body.match(/(@[^ ?,])(.*)/)
          return {
            receiver: `@${parsedMessage[1].substring(1).trim()}`,
            body: (parsedMessage[2] || '').trim(),
          }
        }
      )),
      // TODO 3 - send message
      mergeMap((msg) => {
        return from(sendMessage(msg))
      })
    )
    const subscription = sendMessage$.subscribe()

    return () => subscription.unsubscribe()
  }, [])

  return (<WrappedComponent {...props} sendMessage={chatContext.sendMessage} />)
}
