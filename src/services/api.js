import Axios from 'axios'
import { Client, Message } from '@stomp/stompjs'

const api = Axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 5000,
  headers: {'X-Custom-Header': 'foobar'}
});

export const sendMessage = (msg) => api.post('/message', msg)


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

  stompClient.beforeConnect = () => {
    console.log("before");
    stompConnectionState$.next(STOMP_STATES.CONNECTING)
  }

  stompClient.onStompError =() => {
    console.log("err");
    stompConnectionState$.next(STOMP_STATES.DISCONNECTED)
  };

  stompClient.onConnect = () => {
    console.log("hurrah");
    stompConnectionState$.next(STOMP_STATES.CONNECTED)
  }

  stompClient.onDisconnect = () => {
    console.log(":-(");
    stompConnectionState$.next(STOMP_STATES.DISCONNECTED)
  };

  stompClient.activate()

  return stompClient
}
