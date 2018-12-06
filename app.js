const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const knex = require('knex')
const queries = require('./queries');

app.get('/', (req, res) => {
    queries.listAll().then(movies => res.send(movies));
})


const listener = () => console.log(`Listening on port ${port}`);
app.listen(port, listener);