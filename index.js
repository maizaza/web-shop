const express = require('express')
const serverless = require('serverless-http')

const app = express()
const router = express.Router()
const ejs = require('ejs');
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("API")
})

module.exports = app;