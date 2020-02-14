const config = require('../knexfile').development
const database = require('knex')(config)

function getPeople (id, db = database) {
  return db('people')
    .where('people.id', id)
    .select()
}

function getGame (id, db = database) {
  return db('game')
    .where('game.id', id)
    .select()
}

module.exports = {
  getPeople,
  getGame
}
