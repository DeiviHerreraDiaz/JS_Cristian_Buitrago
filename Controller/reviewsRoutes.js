const express = require('express')
const reviewModel = require('../models/reviewModel')
const router = express.Router()

router.get('/', async (req, resp) =>{

    const reviews = await reviewModel.find()

    resp.json({
        success: true,
        data: reviews
    })
})

router.get('/:id', async (req, resp) =>{

    bootcampId = req.params.id

    const reviews = await reviewModel.find({ bootcampReference: bootcampId }).populate('bootcampReference');

    resp.json({
        success: true,
        data: reviews
    })
})

router.post('/', async (request, response) => {

    const newReview = await reviewModel.create(request.body)

    response.json({
        success: true,
        data: newReview
    })
})

router.put('/:id', async  (req, resp) =>{
    
    reviewId = req.params.id
    const updateReview = await reviewModel.findByIdAndUpdate(reviewId, req.body, {new: true})
    
    resp.json({
        success: true,
        data: updateReview
    })
})

router.delete('/:id', async (req, resp) =>{

    reviewId = req.params.id
    const deleteReview = await reviewModel.findByIdAndDelete(reviewId)

    resp.json({
        success: true,
        data: deleteReview
    })
})

module.exports = router