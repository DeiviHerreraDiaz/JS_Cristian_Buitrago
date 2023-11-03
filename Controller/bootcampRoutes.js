const express = require('express')
const BootcampModel = require('../models/bootcampModel')

// Definir un ruteador
const router = express.Router()

// 1

router.get('/', async (req, resp) =>{
    
    // Utilizar el modelo para seleccionar todos los bootcamps que hay en la base de datos 

   const bootcamps = await BootcampModel.find()

    resp.json({
        success: true,
        data: bootcamps
    })
})

// 2

router.get('/:id', async (req, resp) =>{

    bootcampId = req.params.id
    const bootcamp = await BootcampModel.findById(bootcampId)

    resp.json({
        success: true,
        data: bootcamp        
    })
})

// 3

router.post('/', async (request, response) => {

    // El nuevo bootcamp vendrá al servidor a traves del body del cliente 

    const newBootcamp = await BootcampModel.create(request.body)

    response.json({
        success: true,
        data: newBootcamp
    })
})

//  4

router.put('/:id', async (request, response) => {

    // El nuevo bootcamp vendrá al servidor a traves del body del cliente 

    const bootcampId = request.params.id
    const updateBootcamp = await BootcampModel.findByIdAndUpdate(bootcampId, request.body, {new: true})

    response.json({
        success: true,
        data: updateBootcamp
    })
})


// 5

router.delete('/:id', async (req, resp) =>{

    const bootcampId = req.params.id
    const deleteBootcamp = await BootcampModel.findByIdAndDelete(bootcampId)

    resp.json({
        success: true,
        data: deleteBootcamp 
    })
})

module.exports = router