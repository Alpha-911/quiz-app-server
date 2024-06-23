const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const feedbackController = require('./../controllers/feedbackController')
const router = express.Router();

router
.route('/feedback')
    .post(jsonParser, feedbackController.createFeedback)

module.exports = router;
