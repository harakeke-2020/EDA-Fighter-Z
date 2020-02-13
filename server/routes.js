const express = require('express')
const request = require('superagent')

const router = express.Router()

const api = {
  dbz: 'https://dog.ceo/api/breeds/image/random'
}

router.get('/dbz', (req, res) => {
  return request.get(api.dbz)
    .then(response => {
      const resp = response.body
      console.log(resp)
      res.json({ resp })
    })
}
)

module.exports = router
