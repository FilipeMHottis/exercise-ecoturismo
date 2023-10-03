const { Router } = require('express');
const fs = require('fs').promises;
const path = require('path');

const router = Router();
const pathActivities = '../json/activities.json';

router.get('/activities', async (req, res) => {
    const data = await fs.readFile(path.resolve(__dirname, pathActivities));
    const dataJson = JSON.parse(data);
    res.status(200).json(dataJson);
});
router.post('/activities', (req, res) => {
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = router;
