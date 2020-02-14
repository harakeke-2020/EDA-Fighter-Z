import request from 'superagent'

const apiURL = 'http://localhost:3000/api/v1/game'

export default function getGame () {
  return request.get(`${apiURL}`)
}
