const router = require('express').Router()
const db = require('./db.js')

router.get('/people', (req, res) => {
  return db.getPeople()
    .then(people => {
      console.log(people)
      res.json(people)
    })
})

module.exports = router
