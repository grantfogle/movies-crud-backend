const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('yea buddy');
})

const listener = () => console.log(`Listening on port ${port}`);
app.listen(port, listener);