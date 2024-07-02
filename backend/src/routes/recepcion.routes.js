const { Router } = require('express');
const { check } = require('express-validator');
const validate = require('../middlewares/ValidateAttributes');
const recepcionController = require('../controllers/recepcion.controller');
const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Recepcion' });
});



module.exports = router;