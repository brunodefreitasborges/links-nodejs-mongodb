const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const linkRoute = require('./routes/linkRoute')
const path = require('path');

mongoose.connect('mongodb://localhost/links')

let db = mongoose.connection;

db.on("error", () => { console.log('Houve um erro na conexão'); })
db.once("open", () => { console.log("Banco Carregado"); })


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use('/', linkRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}`))