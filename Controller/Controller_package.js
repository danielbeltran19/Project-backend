const router = require('express').Router();
const { validationResult, check } = require("express-validator");
const ModelPackage = require('../models').Package;
//Peticion get para consultar los datos de la tabla
router.get('/', async (req, res) => {
    try {
        const results = await ModelPackage.findAll();
        return res.json(results)
    } catch (error) {
        console.log('Erro .i.', error)
        return res.status(500).json({
            smsError: 'Error de peticion'
        })
    }
})
//peticion post para insertar los datos
router.post('/', [
    check('descriptions', 'campo requerido').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }
    try {
        const results = await ModelPackage.create(req.body);
        return res.json(results)
    } catch (error) {
        console.log('Error .i.', error)
        return res.status(500).json({
            smsError: 'Error de peticion'
        })
    }
})
//peticion put para actualizar datos de la tabla
router.put('/:id',[
    check('descriptions', 'campo requerido').not().isEmpty()
] ,async (req, res)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }
    try {
        await ModelPackage.update(req.body, {
            where: { id: req.params.id }
        });
       return  res.json({sucess: 'Se ha modificado'});

    } catch (error) {
        console.log('Error .i.', error)
        return res.status(500).json({
            smsError: 'Error de peticion'
        })
    }
})
//peticion delete para eliminar datos de la tabla
router.delete('/:id', async(req, res)=>{
    try {
        await ModelPackage.destroy({
            where: { id: req.params.id }
        });
        return   res.json({sucess: 'Se ha Borrado corrrectamente'});
    } catch (error) {
        console.log('Error .i.', error)
        return res.status(500).json({
            smsError: 'Error de peticion'
        })
    }
  
})

module.exports = router;