const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const conectarDB = require('./config/db')
const cookieParser = require('cookie-parser')


// Dependencias de rutas

const bootcampRoutes = require('./Controller/bootcampRoutes')
const coursesRoutes = require('./Controller/coursesRoutes')
const reviewspRoutes = require('./Controller/reviewsRoutes')
const usersRoutes = require('./Controller/usersRoutes')

//Vincular en archivo .env

dotenv.config(
    { 'path': './config/.env' }
)

// CONECTAR A BASE DE DATOS MONGO
conectarDB()

// Construir objeto app
const app = express()

app.use(express.json())

app.use(cookieParser())

// Conectar las rutas al objeto 

app.use('/api/v1/devcamp/bootcamps',
        bootcampRoutes)

app.use('/api/v1/devcamp/courses',
         coursesRoutes)
        
app.use('/api/v1/devcamp/reviews',
         reviewspRoutes)

app.use('/api/v1/devcamp/auth',
         usersRoutes)

app.listen( process.env.PUERTO , () => {
    console.log(`Servidor en ejecución: ${process.env.PUERTO}`.bgYellow.yellow);
})

