const express = require('express')
const courseModel = require('../models/courseModel')
const router = express.Router()
const { default: mongoose } = require('mongoose')

router.get('/', async (req, resp) =>{

    try {
        
    const courses = await courseModel.find()

    if(courses.length > 0){

        resp.status(200).json({
            success: true,
            data: courses
        })
    } else {

        resp.status(400).json({

            success: false, 
            message: 'No hay cursos'

        })

    }


    } catch (error) {
        
        resp.status(400).json({

            success: false, 
            message: error.message

        })

    }

  

   
})

router.get('/:id', async (req, resp) =>{

    try {
    
    couseId = req.params.id

    if(!mongoose.Types.ObjectId.isValid(couseId)){

        resp.status(500).json({

            success: false,
            message: "Identificador invalido"

        })

    } else {

        const course = await courseModel.findById(couseId)

        if(course){
            resp.status(200).json({
                success: true,
               data: course
            })
        } else {

            resp.status(400).json({

                success: false,
                message: `No hay un curso con el id: ${couseId}`

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

// Verificar la validacion del campo unico

router.post('/', async (request, response) => {

    try {
    
    const newCourse = await courseModel.create(request.body)

    response.status(201).json({
        success: true,
        data: newCourse
    })

    } catch (error) {
        response.status(400).json({

            success: false,
            message: error.message

        })
    }

})

router.put('/:id', async (req, resp) =>{

    try {
        const courseId = req.params.id
        
        if(!mongoose.Types.ObjectId.isValid(courseId)){

            resp.status(500).json({

                success: false, 
                message: "Identificador invalido"

            })

        } else {
            const updateCourse = await courseModel.findByIdAndUpdate(courseId, req.body, {new: true})

            if(updateCourse){

                resp.status(200).json({
                    success: true,
                    data: updateCourse
                })
                
            } else { 

                resp.status(400).json({

                    success: false, 
                    message: `No hay un curso con id: ${courseId}`

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

router.delete('/:id', async (req, resp) =>{

    try {
    
    const courseId = req.params.id

    if(!mongoose.Types.ObjectId.isValid(courseId)){
        resp.status(500).json({

            success: false,
            message: "Identificador invalido"

        }) 
    } else {

        const deleteCourse = await courseModel.findByIdAndDelete(courseId)

        if(deleteCourse){

            resp.status(200).json({
                success: true,
                data: deleteCourse
            })
        } else {

            resp.status(400).json({
            
                success: false, 
                message: `No hay un curso con el id: ${courseId}`

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