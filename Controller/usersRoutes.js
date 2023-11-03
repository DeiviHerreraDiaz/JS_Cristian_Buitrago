const express = require('express')

// Definir un ruteador
const router = express.Router()

// 1

router.get('/', (req, resp) =>{
    resp.json({
        success: true,
        msg: "Aqui se mostrara todos los usuarios"
    })
})

// 2

router.get('/:id', (req, resp) =>{
    resp.json({
        success: true,
        msg: `Aqui se mostrara el usuario cuyo id es ${req.params.id}` 
    })
})

// 3

router.post('/', (request, response) => {

    response.json({
        success: true,
        msg: "Aqui se creara un usuario"
    })
})

//  4

router.put('/:id', (req, resp) =>{
    resp.json({
        success: true,
        msg: `Aqui se editara el usuario con id: ${req.params.id}` 
    })
})


// 5

router.delete('/:id', (req, resp) =>{
    resp.json({
        success: true,
        msg: `Aqui se eliminara el usuario con id: ${req.params.id}` 
    })
})

module.exports = router