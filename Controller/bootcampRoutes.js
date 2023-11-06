const express = require('express')
const BootcampModel = require('../models/bootcampModel')
const router = express.Router()

router.get('/', async (req, resp) =>{

   const bootcamps = await BootcampModel.find()

    resp.json({
        success: true,
        data: bootcamps
    })
})

router.get('/:id', async (req, resp) =>{

    bootcampId = req.params.id
    const bootcamp = await BootcampModel.findById(bootcampId)

    resp.json({
        success: true,
        data: bootcamp        
    })
})

router.post('/', async (request, response) => {

    const newBootcamp = await BootcampModel.create(request.body)

    response.json({
        success: true,
        data: newBootcamp
    })
})

router.put('/:id', async (request, response) => {

    // El nuevo bootcamp vendrá al servidor a traves del body del cliente 

    bootcampId = request.params.id
    const updateBootcamp = await BootcampModel.findByIdAndUpdate(bootcampId, request.body, {new: true})

    response.json({
        success: true,
        data: updateBootcamp
    })
})

router.delete('/:id', async (req, resp) =>{

    const bootcampId = req.params.id
    const deleteBootcamp = await BootcampModel.findByIdAndDelete(bootcampId)

    resp.json({
        success: true,
        data: deleteBootcamp 
    })
})

module.exports = router