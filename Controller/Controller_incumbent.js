const router = require('express').Router();
const { validationResult, check } = require("express-validator");
const ModelIncumbent = require('../models').Incumbent;
const ModelBeneficiary = require('../models').Beneficiary;
const ModelReceipts = require('../models').Receipts;

//peticion para consultar todos los usuarios
router.get('/', async (req, res) => {
    try {
        const results = await ModelIncumbent.findAll({ include: [{ model: ModelBeneficiary }, { model: ModelReceipts }] });
        return res.json(results);
    } catch (error) {
        console.log('Error .i.', error)
        return res.status(500).json({
            smsError: 'Error de peticion'
        })
    }
});
//peticion para insertar todos los usuarios
router.post('/', [
    check('identification', 'campo obligatorio').not().isEmpty(),
    check('name', 'campo obligatorio').not().isEmpty(),
    check('lastname', 'campo obligatorio').not().isEmpty(),
    check('phone', 'campo obligatorio').not().isEmpty(),
    check('affiliation', 'campo obligatorio').not().isEmpty(),
    check('payment', 'campo obligatorio').not().isEmpty(),
    check('birth_date', 'campo obligatorio').not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }
    try {
        const results = await ModelIncumbent.create(req.body)
        return res.json(results)
    } catch (error) {
        console.log('Error .i.', error)
        return res.status(500).json({
            smsError: 'Error de peticion'
        })
    }
})
//peticion para actualizar usuarios
router.put('/:id', [
    check('identification', 'campo obligatorio').not().isEmpty(),
    check('name', 'campo obligatorio').not().isEmpty(),
    check('lastname', 'campo obligatorio').not().isEmpty(),
    check('phone', 'campo obligatorio').not().isEmpty(),
    check('affiliation', 'campo obligatorio').not().isEmpty(),
    check('payment', 'campo obligatorio').not().isEmpty(),
    check('birth_date', 'campo obligatorio').not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }
    try {
        await ModelIncumbent.update(req.body, {
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
//peticion para eliminar usuarios
router.delete('/:id', async (req, res) => {
    try {
        await ModelIncumbent.destroy({
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