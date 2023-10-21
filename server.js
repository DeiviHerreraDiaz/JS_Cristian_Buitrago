const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

//Vincular en archivo .env

dotenv.config(
    { 'path': './config/.env' }
)


// Construir objeto app
app = express()

// Rutas de prueba
// app.get('/prueba', (request, response) => {
//     response.send("Hola")
// })

// app.get('/prueba/:id', (request, response) => {
//     response.send(`Hola, ${ request.params.id }`)
// })

// BOOTCAMPS

// 1

app.get('/bootcamps', (req, resp) =>{
    resp.json({
        success: true,
        msg: "Aqui se mostrara todos los bootcamps "
    })
})

// 2

app.get('/bootcamps/:id', (req, resp) =>{
    resp.json({
        success: true,
        msg: `Aqui se mostrara bootcamp cuyo id es: ${req.params.id}` 
    })
})

// 3

app.post('/bootcamps', (request, response) => {

    response.json({
        success: true,
        msg: "Aqui se creara un bootcamp"
    })
})

//  4

app.put('/bootcamps/:id', (req, resp) =>{
    resp.json({
        success: true,
        msg: `Aqui se editara el bootcamp con id: ${req.params.id}` 
    })
})


// 5

app.delete('/bootcamps/:id', (req, resp) =>{
    resp.json({
        success: true,
        msg: `Aqui se eliminara el bootcamp con id: ${req.params.id}` 
    })
})

// USERS

// 1

app.get('/users', (req, resp) =>{
    resp.json({
        success: true,
        msg: "Aqui se mostrara todos los usuarios"
    })
})

// 2

app.get('/users/:id', (req, resp) =>{
    resp.json({
        success: true,
        msg: `Aqui se mostrara el usuario cuyo id es ${req.params.id}` 
    })
})

// 3

app.post('/users', (request, response) => {

    response.json({
        success: true,
        msg: "Aqui se creara un usuario"
    })
})

//  4

app.put('/users/:id', (req, resp) =>{
    resp.json({
        success: true,
        msg: `Aqui se editara el usuario con id: ${req.params.id}` 
    })
})


// 5

app.delete('/users/:id', (req, resp) =>{
    resp.json({
        success: true,
        msg: `Aqui se eliminara el usuario con id: ${req.params.id}` 
    })
})

// REVIEWS

// 1

app.get('/reviews', (req, resp) =>{
    resp.json({
        success: true,
        msg: "Aqui se mostrara todas las review"
    })
})

// 2

app.get('/reviews/:id', (req, resp) =>{
    resp.json({
        success: true,
        msg: `Aqui se mostrara la review cuya id es ${req.params.id}` 
    })
})

// 3

app.post('/reviews', (request, response) => {

    response.json({
        success: true,
        msg: "Aqui se creara una review"
    })
})

//  4

app.put('/reviews/:id', (req, resp) =>{
    resp.json({
        success: true,
        msg: `Aqui se editara una review con id: ${req.params.id}` 
    })
})


// 5

app.delete('/reviews/:id', (req, resp) =>{
    resp.json({
        success: true,
        msg: `Aqui se eliminara la review con id: ${req.params.id}` 
    })
})

// COURSES

// 1

app.get('/courses', (req, resp) =>{
    resp.json({
        success: true,
        msg: "Aqui se mostrara todos los cursos"
    })
})

// 2

app.get('/courses/:id', (req, resp) =>{
    resp.json({
        success: true,
        msg: `Aqui se mostrara el curso con id: ${req.params.id}` 
    })
})

// 3

app.post('/courses', (request, response) => {

    response.json({
        success: true,
        msg: "Aqui se creara un curso"
    })
})

//  4

app.put('/courses/:id', (req, resp) =>{
    resp.json({
        success: true,
        msg: `Aqui se editara una curso con id: ${req.params.id}` 
    })
})


// 5

app.delete('/courses/:id', (req, resp) =>{
    resp.json({
        success: true,
        msg: `Aqui se eliminara un curso con id: ${req.params.id}` 
    })
})

app.listen( process.env.PUERTO , () => {
    console.log(`Servidor en ejecución: ${process.env.PUERTO}`.bgYellow.yellow);
})

