const express = require('express')
const courseModel = require('../models/courseModel')
const router = express.Router()

router.get('/', async (req, resp) =>{

    const courses = await courseModel.find()

    resp.json({
        success: true,
        data: courses
    })
})

router.get('/:id', async (req, resp) =>{

    couseId = req.params.id
    const course = await courseModel.findById(couseId)
    resp.json({
        success: true,
       data: course
    })
})

router.post('/', async (request, response) => {

    const newCourse = await courseModel.create(request.body)

    response.json({
        success: true,
        data: newCourse
    })
})

router.put('/:id', async (req, resp) =>{

    const courseId = req.params.id
    const updateCourse = await courseModel.findByIdAndUpdate(courseId, req.body, {new: true})

    resp.json({
        success: true,
        data: updateCourse
    })
})

router.delete('/:id', async (req, resp) =>{

    courseId = req.params.id
    const deleteCourse = await courseModel.findByIdAndDelete(courseId)

    resp.json({
        success: true,
        data: deleteCourse
    })
})

module.exports = router