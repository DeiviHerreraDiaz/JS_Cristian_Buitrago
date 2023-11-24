const express = require('express')
const BootcampModel = require('../models/bootcampModel')
const { default: mongoose } = require('mongoose')
const router = express.Router()

// Dependencias al middleware
const {protect, authorize} = require ('../middleware/auth')

router.get('/', async (req, resp) =>{

    try {

        const bootcamps = await BootcampModel.find()
        
        if (bootcamps.length > 0) {
        
            resp.
            status(200).
            json({
            success: true,
            data: bootcamps
        })
        } else{
            resp.
            status(400).
            json({
                success: false, 
                message: 'No hay bootcamps'
            })
        }
        
    } catch (error) {
        resp.status(400)
        .json({
            success: false,
            message: error.message
        })
    }
   
})

router.get('/:id', async (req, resp) =>{

    try {
        bootcampId = req.params.id

        if(!mongoose.Types.ObjectId.isValid(bootcampId)){
            resp.
            status(500)
            .json({

                success: false, 
                message: "Identificador invalido"
            })

        } else {
            const bootcamp = await BootcampModel.findById(bootcampId)
    
            if (bootcamp){
    
                resp.
                status(200).
                json({
                success: true,
                data: bootcamp        
            })
    
            } else {
    
                resp.
                status(400).
                json({
    
                    success: false, 
                    message: `No hay bootcamp con el id: ${bootcampId}`
    
                })
    
            }
        }

    } catch (error) {
        resp.status(400)
        .json({
            success: false,
            message: error.message
        })
    }


})

router.post('/', protect, async (request, response) => {

    try {
        
    const newBootcamp = await BootcampModel.create(request.body)

    response.
        status(201).
        json({
        success: true,
        data: newBootcamp
    })

    } catch (error) {
        
        response.status(400)
        .json({

            success: false, 
            message: error.message

        })

    }

    
})

router.put('/:id', async (request, response) => {

    try {
        
        const bootcampId = request.params.id

        if(!mongoose.Types.ObjectId.isValid(bootcampId)){
            
            response.status(500).json({
                success: false,
                message: "Identificador invalido"
            })
           
        } else {

            const updateBootcamp = await BootcampModel.findByIdAndUpdate(bootcampId, request.body, {new: true})
        
            if(updateBootcamp){
                response.status(200).
                json({
                success: true,
                data: updateBootcamp
            })

            } else {
                response.
                status(400).
                json({
    
                    success: false, 
                    message: `No hay bootcamp con el id: ${bootcampId}`
    
                })
            }

        }

    } catch (error) {
     
        response.status(400).json({

            success: false, 
            message: error.message
        })
    }


  
})

router.delete('/:id', async (req, resp) =>{

    

    try {

        const bootcampId = req.params.id


        if(!mongoose.Types.ObjectId.isValid(bootcampId)){
            
            resp.status(500).json({
                success: false,
                message: "Identificador invalido"
            })

            } else {

                const deleteBootcamp = await BootcampModel.findByIdAndDelete(bootcampId)

                if(deleteBootcamp){
                    resp.status(200).json({
                        success: true,
                        data: deleteBootcamp 
                    })
                } else{
                    
                    resp.status(400).json({
                        success: false, 
                        message: `No hay bootcamp con el id: ${bootcampId}`

                    })
                }
            }
    } catch (error) {
        resp.status(400).json({

            success: false, 
            message: error.message

        })
    }


    
    

   
})

module.exports = router