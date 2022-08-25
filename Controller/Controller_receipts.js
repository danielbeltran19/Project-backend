const router = require('express').Router()
const { validationResult, check } = require("express-validator");
const Modelreceipts = require('../models').Receipts

//peticion para realizar la consulta y traer todos los datos
router.get('/', async (req, res) => {
    try {
        const results = await Modelreceipts.findAll()
        return res.json(results)
    } catch (error) {
        console.log('Error .i.', error)
        return res.status(500).json({
            smsError: 'Error de peticion'
        })
    }
})

router.post('/', [
    check('name', 'campo requerido').not().isEmpty(),
    check('lastname', 'campo requerido').not().isEmpty(),
    check('payment_date', 'campo requerido').not().isEmpty(),
    check('cost', 'campo requerido').not().isEmpty(),
    check('months', 'campo requerido').not().isEmpty(),
    check('collector_name', 'campo requerido').not().isEmpty(),
    check('observations', 'campo requerido').not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }
    try {
        const results = await Modelreceipts.create(req.body)
        return res.json({ ok: true, results })
    } catch (error) {
        console.log('Error .i.', error)
        return res.status(500).json({
            smsError: 'Error de peticion'
        })
    }
})

router.put('/:id', [
    check('name', 'campo requerido').not().isEmpty(),
    check('lastname', 'campo requerido').not().isEmpty(),
    check('payment_date', 'campo requerido').not().isEmpty(),
    check('cost', 'campo requerido').not().isEmpty(),
    check('months', 'campo requerido').not().isEmpty(),
    check('collector_name', 'campo requerido').not().isEmpty(),
    check('observations', 'campo requerido').not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }
    try {
        await Modelreceipts.update(req.body, {
            where: { id: req.params.id }
        })
        return res.json({ sucess: 'se ha modificado correctamente' })
    } catch (error) {
        console.log('Error .i.', error)
        return res.status(500).json({
            smsError: 'Error de peticion'
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await Modelreceipts.destroy({
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
module.exports = router