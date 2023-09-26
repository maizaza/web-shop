const express = require('express')
const app = express()
const router = express.Router()
const ejs = require('ejs');
const path = require('path')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash')

mongoose.connect('mongodb+srv://admin:0987654321z@cluster0.vhsadmo.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(flash())
app.use(expressSession({secret: "node secret"}))
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("home")
})

module.exports = app;