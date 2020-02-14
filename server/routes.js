const express = require('express')
const request = require('superagent')
const db = require('../server/db')

const router = express.Router()

const api = {
  dbz: 'https://dog.ceo/api/breeds/image/random'
}

router.get('/dbz', (req, res) => {
  return request.get(api.dbz)
    .then(response => {
      const resp = response.body
      res.json({ resp })
    })
}
)

router.put('/:id', (req, res) => {
  console.log(req.params.id)
  return db.updScore(req.params.id)
    .then(data => {
      console.log(data)
      data === 1
        ? res.send('Win logged')
        : res.send('error')
    })
})

router.get('/people', (req, res) => {
  const id = Number(Math.floor(Math.random() * Math.floor(12) + 1))
  return db.getPeople(id)
    .then(people => {
      console.log
      res.json(people)
    })
})

router.get('/game', (req, res) => {
  const id = Number(Math.floor(Math.random() * Math.floor(5) + 1))
  return db.getGame(id)
    .then(game => {
      res.json(game)
    })
})

module.exports = router
