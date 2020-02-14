import request from 'superagent'

const peopleURL = 'http://localhost:3000/api/v1/people'

function getPeople () {
  return request.get(peopleURL)
}

function updScore () {
  return request.put(peopleURL)
}

export { getPeople, updScore }
