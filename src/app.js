const express = require('express');
const activitiesRouter = require('./routes/activities.router');

const app = express();

app.use(express.json());
app.use(activitiesRouter);

module.exports = app;
