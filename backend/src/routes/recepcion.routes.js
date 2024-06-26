const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Recepcion' });
});

module.exports = router;