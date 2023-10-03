const nameIsValidaded = (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'O campo "nome" é obrigatório' });
    }
    if (name.length < 3) {
        return res.status(400).json({ message: 'O campo "nome" deve ter pelo menos 4 caracteres' });
    }

    next();
};

const priceIsValidaded = (req, res, next) => {
    const { price } = req.body;

    if (!price) {
        return res.status(400).json({ message: 'O campo "preço" é obrigatório' });
    }
    if (price <= 0) {
        return res.status(400).json({ message: 'O campo "preço" deve ser maior que zero' });
    }

    next();
};

const descritionIsValidaded = (req, res, next) => {
    const { description } = req.body;
    
    if (!description) {
        return res.status(400).json({ message: 'O campo "descrição" é obrigatório' });
    }

    const { createdAt, rating, difficulty } = description;
    if (!createdAt) {
        return res.status(400).json({ message: 'O campo "createdAt" é obrigatório' });
    }
    if (!rating) {
        return res.status(400).json({ message: 'O campo "rating" é obrigatório' });
    }
    if (!difficulty) {
        return res.status(400).json({ message: 'O campo "rating" é obrigatório' });
    }

    next();
};

const createdAtIsValidaded = (req, res, next) => {
    const { description } = req.body;
    const { createdAt } = description;

    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regex.test(createdAt)) {
        return res
            .status(400)
            .json({ message: 'O campo createdAt deve ter o formato "\'dd/mm/aaaa\'"' });
    }

    next();
};

const ratingIsValidaded = (req, res, next) => {
    const { description } = req.body;
    const { rating } = description;

    if (rating < 1 || rating > 5) {
        return res.status(400).json({ message: 'O campo "rating" deve ser um inteiro de 1 à 5' });
    }

    next();
};

const difficultyIsValidaded = (req, res, next) => {
    const { description } = req.body;
    const { difficulty } = description;

    if (difficulty === 'Fácil' || difficulty === 'Médio' || difficulty === 'Difícil') {
        return res
            .status(400)
            .json({ message: 'O campo "difficulty" deve ser Fácil, Médio ou Difícil' });
    }

    next();
};

const validation = {
    nameIsValidaded,
    priceIsValidaded,
    descritionIsValidaded,
    createdAtIsValidaded,
    ratingIsValidaded,
    difficultyIsValidaded,
};

module.exports = validation;
