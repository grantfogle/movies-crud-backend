// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/MOVIE_CRUD_DB'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }

};
