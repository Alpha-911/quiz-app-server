const express = require('express')
const cors = require('cors')
const feedbackRoute = require('./routes/feedbackRoute')

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/', feedbackRoute)

module.exports = app;
