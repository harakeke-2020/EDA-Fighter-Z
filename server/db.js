const config = require('../knexfile').development
const database = require('knex')(config)

function getPeople (id, db = database) {
  return db('people')
    .where('people.id', id)
    .select()
}

module.exports = {
  getPeople
}
