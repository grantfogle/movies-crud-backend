const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const knex = require('knex')
const queries = require('./queries');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    queries.listAll().then(movies => res.send(movies));
})

app.get('/:id', (req, res) => {
    queries.getById(req.params.id).then(movies => res.send(movies))
})

app.post('/', (req, res) => {
    queries.createMovie(req.body).then(movies => res.send(movies))
})

app.delete('/:id', (req, res) => {
    queries.deleteMovie(req.params.id).then(movie => {
        console.log(movie);
        res.status(200).send(movie);
    })
})

app.put('/:id', (req, res) => {
    queries.updateMovie(req.params.id, req.body).then(updatedMovie => res.json(updatedMovie[0]))
})

const listener = () => console.log(`Listening on port ${port}`);
app.listen(port, listener);