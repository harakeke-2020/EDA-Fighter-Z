import request from 'superagent'

const peopleURL = 'http://localhost:3000/api/v1'

export default function updScore (id) {
  console.log(id)
  return request.put(`${peopleURL}/${id}`)
  // .send()
    .then()
}

// export default { getPeople }
