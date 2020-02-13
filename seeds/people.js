exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        { name: 'Brendan', score: 0 },
        { name: 'Emily', score: 0 },
        { name: 'Hamish', score: 0 },
        { name: 'Hywel', score: 0 },
        { name: 'Jae', score: 0 },
        { name: 'James', score: 0 },
        { name: 'Jared', score: 0 },
        { name: 'Kevin', score: 0 },
        { name: 'Lorenzo', score: 0 },
        { name: 'Nat', score: 0 },
        { name: 'Qian-Ye', score: 0 },
        { name: 'Ric', score: 0 },
        { name: 'Tom', score: 0 }
      ])
    })
}
