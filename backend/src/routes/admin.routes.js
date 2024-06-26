const { Router } = require('express');
const { check } = require('express-validator');
const validate = require('../middlewares/ValidateAttributes');
const adminController = require('../controllers/admin.controller');
const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Admin' });
});

router.post('/registro',
    [
        check('nombre', 'El nombre es obligatorio').notEmpty(),
        check('apellido', 'El apellido es obligatorio').notEmpty(),
        check('usuario', 'El usuario es obligatorio').notEmpty(),
        check('correo', 'El correo es obligatorio').isEmail(),
        check('password', 'El password es obligatorio').notEmpty(),
        validate
    ], 
    adminController.registro
);


module.exports = router;