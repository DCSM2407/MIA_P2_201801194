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

router.post('/registror',
    [
        check('nombre', 'El nombre es obligatorio').notEmpty(),
        check('apellido', 'El apellido es obligatorio').notEmpty(),
        check('usuario', 'El usuario es obligatorio').notEmpty(),
        check('correo', 'El correo es obligatorio').isEmail(),
        check('password', 'El password es obligatorio').notEmpty(),
        validate
    ], 
    adminController.registror
);

router.post('/registroa',
    [
        check('nombre', 'El nombre es obligatorio').notEmpty(),
        check('apellido', 'El apellido es obligatorio').notEmpty(),
        check('usuario', 'El usuario es obligatorio').notEmpty(),
        check('correo', 'El correo es obligatorio').isEmail(),
        check('password', 'El password es obligatorio').notEmpty(),
        validate
    ], 
    adminController.registroa
);

router.post('/deleteuser',
    [
        check('usuario', 'El usuario es obligatorio').notEmpty(),
        validate
    ], 
    adminController.deleteUsuario
);

router.post('/deletecarro',
    [
        check('placa', 'La Placa es obligatorio').notEmpty(),
        validate
    ], 
    adminController.deleteCarro
);

router.post('/deletevuelo',
    [
        check('placa', 'La Placa es obligatorio').notEmpty(),
        validate
    ], 
    adminController.deleteVuelos
);

router.post('/autos',
    [
        check('agencia', 'agencia es obligatorio').notEmpty(),
        check('marca', 'marca es obligatorio').notEmpty(),
        check('placa', 'placa es obligatorio').notEmpty(),
        check('modelo', 'modelo es obligatorio').notEmpty(),
        check('precio', 'precio es obligatorio').notEmpty(),
        check('ciudad', 'ciudad es obligatorio').notEmpty(),
        validate
    ], 
    adminController.addCarro
);

router.post('/vuelos',
    [
        check('agencia', 'agencia es obligatorio').notEmpty(),
        check('placa', 'placa es obligatorio').notEmpty(),
        check('origen', 'origen es obligatorio').notEmpty(),
        check('destino', 'destino es obligatorio').notEmpty(),
        check('dias', 'dias es obligatorio').notEmpty(),
        check('precio', 'precio es obligatorio').notEmpty(),
        validate
    ], 
    adminController.addVuelo
);

router.post('/login',
    [
        check('usuario', 'El usuario es obligatorio').notEmpty(),
        check('password', 'El password es obligatorio').notEmpty(),
        validate
    ], 
    adminController.iniciarSesion
);

router.post('/reservacar',
    [
        check('usuario', 'El usuario es obligatorio').notEmpty(),
        check('agencia', 'La agencia es obligatoria').notEmpty(),
        check('marca', 'La marca es obligatoria').notEmpty(),
        check('modelo', 'El modelo es obligatorio').notEmpty(),
        check('precio', 'La placa es obligatoria').notEmpty(),
        check('estado', 'El estado es obligatorio').notEmpty(),
        validate
    ], 
    adminController.ReservaCar
);

router.post('/reservavuelo',
    [
        check('usuario', 'El usuario es obligatorio').notEmpty(),
        check('origen', 'El origen es obligatorio').notEmpty(),
        check('destino', 'El destino es obligatorio').notEmpty(),
        check('dias', 'Los dias son obligatorios').notEmpty(),
        check('precio', 'El precio es obligatorio').notEmpty(),
        check('estado', 'El estado es obligatorio').notEmpty(),
        validate
    ], 
    adminController.ReservaVuelo
);

router.post('/showreservacar',
    [
        check('usuario', 'El usuario es obligatorio').notEmpty(),
        validate
    ], 
    adminController.getReservaC
);

router.post('/showreservavuelo',
    [
        check('usuario', 'El usuario es obligatorio').notEmpty(),
        validate
    ], 
    adminController.getReservaV
);

router.post('/estado1',
    [
        check('usuario', 'El usuario es obligatorio').notEmpty(),
        validate
    ], 
    adminController.updateEstado1
);

router.post('/estado2',
    [
        check('usuario', 'El usuario es obligatorio').notEmpty(),
        validate
    ], 
    adminController.updateEstado2
);

router.post('/estado3',
    [
        check('usuario', 'El usuario es obligatorio').notEmpty(),
        validate
    ], 
    adminController.updateEstado3
);

router.post('/estado4',
    [
        check('usuario', 'El usuario es obligatorio').notEmpty(),
        validate
    ], 
    adminController.updateEstado4

);

router.get('/showrcr', adminController.getDataRAuto);
router.get('/showrvr', adminController.getDataRVuelo);
router.get('/userdata', adminController.getDataU);
router.get('/usuariost', adminController.getDataT);
router.get('/usuariosr', adminController.getDataR);
router.get('/usuariosa', adminController.getDataA);
router.get('/showvuelos', adminController.getDataVuelo);
router.get('/showautos', adminController.getDataAuto);


module.exports = router;