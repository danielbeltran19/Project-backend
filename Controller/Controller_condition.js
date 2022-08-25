const router = require('express').Router();
const { validationResult, check } = require("express-validator");
const Modelcondition = require('../models').Condition

router.get('/', async (req, res) => {
    try {
        const result = await Modelcondition.findAll()
        return res.json(result)
    } catch (error) {
        console.log('Error .i. ', error)
        return res.status(500).json({
            smsError: 'Error de peticion'
        })
    }
})

router.post('/', [
    check('description', 'Campo requerido').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }
    try {
        const results = await Modelcondition.create(req.body)
        return res.json(results)
    } catch (error) {
        console.log('Error .i. ', error)
        return res.status(500).json({
            smsError: 'Error de peticion'
        })
    }
})

router.put('/:id', [
    check('description', 'Campo requerido').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }
    try {
        await Modelcondition.update(req.body, {
            where: { id: req.params.id }
        })
        return res.json({ succes: 'modificado con exito' })
    } catch (error) {
        console.log('Error .i. ', error)
        return res.status(500).json({
            smsError: 'Error de peticion'
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await Modelcondition.destroy({
            where: { id: req.params.id }
        });
        return res.json({ sucess: 'Se ha Borrado corrrectamente' });
    } catch (error) {
        console.log('Error .i. ', error)
        return res.status(500).json({
            smsError: 'Error de peticion'
        })
    }
})

module.exports = router;