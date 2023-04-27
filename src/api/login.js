import axios from './axios'

export function Login(username,password) {
  return axios({
    url: 'doLogin',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}
