const express = require('express')
const serverless = require('serverless-http')

const app = express()
const router = express.Router()
const ejs = require('ejs');
const path = require('path')

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("test")
})

module.exports = app;