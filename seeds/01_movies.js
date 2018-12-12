
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        { title: 'Inception', director: 'Christopher Nolan', year: 2010, rating: 9, url: 'https://www.imdb.com/title/tt1375666/' },
        { title: 'Lord of the Rings: The Fellowship of the Ring', director: 'Peter Jackson', year: 2001, rating: 10, url: 'https://www.imdb.com/title/tt0120737/' },
        { title: 'Step Brothers', director: 'Adam McKay', year: 2008, rating: 9, url: 'https://www.imdb.com/title/tt0838283/' },
        { title: 'Lord of the Rings: The Return of the King', director: 'Peter Jackson', year: 2003, rating: 9, url: 'https://www.imdb.com/title/tt0167260/' },
        { title: 'The Dark Knight', director: 'Christopher Nolan', year: 2008, rating: 9, url: 'https://www.imdb.com/title/tt0468569/' },
        { title: 'The Last Samurai', director: 'Edward Zwick', year: 2003, rating: 8, url: 'https://www.imdb.com/title/tt0325710/' },
        { title: 'Saving Private Ryan', director: 'Steven Spielberg', year: 1998, rating: 10, url: 'https://www.imdb.com/title/tt0120815/' },
        { title: 'Interstellar', director: 'Christopher Nolan', year: 2014, rating: 9, url: 'https://www.imdb.com/title/tt0816692/' },
        { title: 'The Departed', director: 'Martin Scorsese', year: 2006, rating: 10, url: 'https://www.imdb.com/title/tt0407887/' },
      ]);
    });
};
