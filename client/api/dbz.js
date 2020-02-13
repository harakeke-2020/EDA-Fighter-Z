import request from 'superagent'

const apiURL = 'http://localhost:3000/api/v1/dbz'

export function getdbz () {
  return request.get(`${apiURL}`)
}
