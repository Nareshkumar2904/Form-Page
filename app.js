const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('dotenv/config');
app.use(bodyParser.json());

const post = require('./posts');
app.use('/posts', post);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.get('/', (req, res) => {
    res.send('hello world');
});

mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.log(err)
console.log('Connected to DB');
});

app.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000....');
});