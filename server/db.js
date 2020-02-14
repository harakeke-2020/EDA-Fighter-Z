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

function updScore (id, db = database) {
  let currentScore = 0
  return db('people')
    .where('id', id)
    .select('score')
    .then(data => { currentScore = data + 1 })
    .then(() => {
      return db('people')
        .where('id', id)
        .update({ score: currentScore })
    })
}

module.exports = {
  getPeople,
  getGame,
  updScore
}
