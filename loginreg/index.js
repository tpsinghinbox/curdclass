const { application } = require('express');
const express = require('express')
const app = express();
const hbs = require('hbs') 
require('./helpers/db/db')
const indexRouters = require('./helpers/routers/student')
const path = require('path') 
const staticPath = path.join(__dirname, 'public')
const templatePath = path.join(__dirname, 'templates/views')
const partialsPath = path.join(__dirname, 'templates/partials')

// this is for public static folder
app.use(express.static(staticPath))  
app.use(express.json()) 
app.use(express.urlencoded({ extended: false }))
// this is templage engine
app.set("view engine", "hbs")
app.set("views", templatePath)
hbs.registerPartials(partialsPath)

app.use(indexRouters)

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('*', (req, res) => {
    res.send("nothing found")
})

app.listen(3000,()=>{
    console.log('listening on 3000')
});