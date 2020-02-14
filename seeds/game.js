exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('game').del()
    .then(function () {
      // Inserts seed entries
      return knex('game').insert([
        { description: 'During the Saiyan Saga, how does Goku reach King Kais planet?' },
        { description: 'What item is used to restore a wounded Z fighter to full health?' },
        { description: 'What is Gokus wifes name?' },
        { description: 'Who does Captain Ginyu serve?' },
        { description: 'How do you do a Naruto run?' },
        { description: 'What do you have to do with Pokemon?' }
      ])
    })
}
