const express = require('express')
const mongoose = require('mongoose')
const user = require('./user.controller')
const app = express()
const port = 3001

app.use(express.json())

mongoose.connect('mongodb+srv://<username>:<<password>>@cluster0.4ofzxvo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')


app.get('/users', user.list)
app.post('/users', user.create)
app.get('/users/:id', user.get)
app.put('/users/:id', user.update)
app.patch('/users/:id', user.update)
app.delete('/users/:id', user.destroy)

app.use(express.static('app'))

app.get('/', (req, res) =>{
    res.sendFile(`${__dirname}/index.html`)
})

app.get('*', (req, res) =>{
    res.status(404).send('Esta pagina no existe')
})


app.listen(port, () =>{
    console.log('Arrancando la aplicacion')
})