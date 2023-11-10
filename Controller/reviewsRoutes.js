const express = require('express')
const reviewModel = require('../models/reviewModel')
const router = express.Router()
const { default: mongoose } = require('mongoose')

router.get('/', async (req, resp) =>{

    try {
        
    const reviews = await reviewModel.find()

    if(reviews.length > 0){

        resp.status(200).json({
            success: true,
            data: reviews
        })

    } else { 

        resp.status(400).json({

            success: false, 
            message: "No hay reviews"

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
        
    bootcampId = req.params.id

    if(!mongoose.Types.ObjectId.isValid(bootcampId)){

        resp.status(500).json({

            success: false, 
            message: "Identificador invalido"

        }) 

    } else { 

        
    const reviews = await reviewModel.find({ bootcampReference: bootcampId }).populate('bootcampReference');

    if(reviews.length > 0){

        
        resp.status(200).json({
            success: true,
            data: reviews
        })

    } else {

        resp.status(400).json({

            success: false, 
            message: `No hay reviews con el id del bootcamp: ${bootcampId}`

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

router.post('/', async (request, response) => {

    try {
    
    const newReview = await reviewModel.create(request.body)
        
    response.status(201).json({
        success: true,
        data: newReview
    })

    } catch (error) {
        
    response.status(400).json({

        success: false, 
        message: error.message

    })

    }

    
})

router.put('/:id', async  (req, resp) =>{
    
    try {
        
    const reviewId = req.params.id    

    if(!mongoose.Types.ObjectId.isValid(reviewId)){
    
        resp.status(500).json({

            success: false, 
            message: "Identificador invalido"

        })
        
    } else {

        const updateReview = await reviewModel.findByIdAndUpdate(reviewId, req.body, {new: true})

        if(updateReview){
            resp.status(200).json({
                success: true,
                data: updateReview
            })
        } else {

            resp.status(400).json({

                success: false,
                message: `No hay review con el id: ${reviewId}`

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
    
    const reviewId = req.params.id

    if(!mongoose.Types.ObjectId.isValid(reviewId)){

        resp.status(500).json({
            success: false,
            message: "Identificador invalido"
        })
    } else {
        const deleteReview = await reviewModel.findByIdAndDelete(reviewId)

        if(deleteReview){
            resp.json({
                success: true,
                data: deleteReview
            })
        } else { 
            resp.status(400).json({
                success: false, 
                message: `No hay bootcamp con el id: ${reviewId}`

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