const { Router } = require('express');

const router = Router();

router.post('/activities', (req, res) => {
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = router;
