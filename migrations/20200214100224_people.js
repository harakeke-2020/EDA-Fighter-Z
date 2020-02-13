exports.up = function (knex) {
  return knex.schema.createTable('people', table => {
    table.increments('id')
    table.string('name')
    table.integer('score')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('people')
}
