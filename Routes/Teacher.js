const { Router } = require('express')
const router = Router()
const data = require('../Data/data')
const { v4 } = require('uuid')

//get All teachers

router.get('/', (req, res) => {
    res.json({
        message: 'All Teachers',
        data: data
    })
})

//get one teacher

router.get('/:id', (req, res) => {
    res.json(data.filter(item => item.id == req.params.id))
})

//create ucer

router.post('/', (req, res) => {
    const body = req.body
    const newTeacher = {
        id: v4(),
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
    }
    data.push(newTeacher)
    res.json({
        message: 'Teacher Created',
        data: newTeacher
    })
})

//delete

router.delete('/:id', (req, res) => {
    data = data.filter(item => item.id == req.params.id)
    res.json(data)
})




//update teacher

module.exports = router