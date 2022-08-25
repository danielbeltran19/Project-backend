const router = require('express').Router();
const { validationResult, check } = require("express-validator");
const ModelBeneficiary = require('../models').Beneficiary

router.get('/', async (req, res) => {
    try {
        const results = await ModelBeneficiary.findAll();
        return res.json(results)
    } catch (error) {
        console.log('Erro .i.', error)
        return res.status(500).json({
            smsError: 'Error de peticion'
        })
    }
})

router.post('/', [
    check('identification', 'campo obligatorio').not().isEmpty(),
    check('name', 'campo obligatorio').not().isEmpty(),
    check('lastname', 'campo obligatorio').not().isEmpty(),
    check('birth_date', 'campo obligatorio').not().isEmpty(),
    check('affiliation', 'campo obligatorio').not().isEmpty(),
    check('relationship', 'campo obligatorio').not().isEmpty(),
    check('observations', 'campo obligatorio').not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }
    try {
        const results = await ModelBeneficiary.create(req.body)
        return res.json(results)
    } catch (error) {
        console.log('Error .i.', error)
        return res.status(500).json({
            smsError: 'Error de peticion'
        })
    }
})

router.put('/:id', [
    check('identification', 'campo obligatorio').not().isEmpty(),
    check('name', 'campo obligatorio').not().isEmpty(),
    check('lastname', 'campo obligatorio').not().isEmpty(),
    check('birth_date', 'campo obligatorio').not().isEmpty(),
    check('affiliation', 'campo obligatorio').not().isEmpty(),
    check('relationship', 'campo obligatorio').not().isEmpty(),
    check('observations', 'campo obligatorio').not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }
    try {
        await ModelBeneficiary.update(req.body, {
            where: { id: req.params.id }
        });
        return res.json({ sucess: 'Se ha modificado' });
    } catch (error) {
        console.log('Error .i.', error)
        return res.status(500).json({
            smsError: 'Error de peticion'
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await ModelBeneficiary.destroy({
            where: { id: req.params.id }
        });
        return res.json({ sucess: 'Se ha Borrado corrrectamente' });
    } catch (error) {
        console.log('Error .i.', error)
        return res.status(500).json({
            smsError: 'Error de peticion'
        })
    }
})
module.exports = router;