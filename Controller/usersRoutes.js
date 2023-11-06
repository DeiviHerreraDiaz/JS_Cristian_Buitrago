const express = require('express')
const userModel = require('../models/userModel')
const router = express.Router()

router.get('/', async (req, resp) =>{

    const users = await userModel.find()

    resp.json({
        success: true,
        data: users
    })
})

router.get('/:id', async (req, resp) =>{
    
    userId = req.params.id
    const user = await userModel.findById(userId)

    resp.json({
        success: true,
        data: user 
    })
})

router.post('/', async (request, response) => {

    const newUser = await userModel.create(request.body)

    response.json({
        success: true,
        data: newUser
    })
})

router.put('/:id', async (req, resp) =>{

    userId = req.params.id

    const updateUser = await userModel.findByIdAndUpdate(userId, req.body, {new: true})

    resp.json({
        success: true,
        data: updateUser
    })
})

router.delete('/:id', async (req, resp) =>{

    userId = req.params.id
    const deleteUser = await userModel.findByIdAndDelete(userId)

    resp.json({
        success: true,
        data: deleteUser 
    })
})

module.exports = router