const express = require('express')

const router = express.Router()

router.get('/', (req, resp) =>{
    resp.json({
        success: true,
        msg: "Aqui se mostrara todos los usuarios"
    })
})

router.get('/:id', (req, resp) =>{
    resp.json({
        success: true,
        msg: `Aqui se mostrara el usuario cuyo id es ${req.params.id}` 
    })
})

router.post('/', (request, response) => {

    response.json({
        success: true,
        msg: "Aqui se creara un usuario"
    })
})

router.put('/:id', (req, resp) =>{
    resp.json({
        success: true,
        msg: `Aqui se editara el usuario con id: ${req.params.id}` 
    })
})

router.delete('/:id', (req, resp) =>{
    resp.json({
        success: true,
        msg: `Aqui se eliminara el usuario con id: ${req.params.id}` 
    })
})

module.exports = router