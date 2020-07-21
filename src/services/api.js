import Axios from 'axios'
import { Client, Message } from '@stomp/stompjs'

const api = Axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 5000,
  headers: {'X-Custom-Header': 'foobar'}
});

export const sendMessage = (msg) => api.post('send/message', msg)


export const STOMP_STATES = {
  CONNECTING: 'CONNECTING',
  CONNECTED: 'CONNECTED',
  DISCONNECTED: 'DISCONNECTED'
}
export const getStompClient = (brokerURL, stompConnectionState$) => {
  const stompClient = new Client({
    brokerURL,
    connectHeaders: {
      login: "user",
      passcode: "password"
    },
    debug: function (str) {
      console.log(str);
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000
  })

  stompClient.beforeConnect(() => {
    stompConnectionState$.next(STOMP_STATES.CONNECTING)
  })

  stompClient.onStompError(() => {
    stompConnectionState$.next(STOMP_STATES.DISCONNECTED)
  })

  stompClient.onConnect(() => {
    stompConnectionState$.next(STOMP_STATES.CONNECTED)
  })

  stompClient.onDisconnect(() => {
    stompConnectionState$.next(STOMP_STATES.DISCONNECTED)
  })

  stompClient.activate()

  return stompClient
}
