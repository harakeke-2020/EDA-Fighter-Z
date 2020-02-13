const config = require('../knexfile').development
const database = require('knex')(config)

function getPeople (db = database) {
  return db('people')
    .select()
}

module.exports = {
  getPeople
}
