const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const feedbackController = require('./../controllers/feedbackController')
const router = express.Router();

router
.route('/')
    .get(feedbackController.getFeedback)
    .post(jsonParser, feedbackController.createFeedback)

module.exports = router;