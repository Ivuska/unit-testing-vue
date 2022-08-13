import axios from 'axios'

export async function getMessage() {
  return axios.get('http://localhost:3000/message').then(response => {
    return response.data
  })
}