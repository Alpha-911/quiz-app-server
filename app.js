const express = require('express')
const cors = require('cors')
const feedbackRoute = require('./routes/feedbackRoute')

const app = express();

app.use('/', feedbackRoute)

module.exports = app;