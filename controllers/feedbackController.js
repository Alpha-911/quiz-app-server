const feedback = require('./../models/feedback-data-model')

exports.createFeedback = async (req, res) => {
    try {
        const newData = await feedback.create(req.body);

        res.status(201).json({
            status: 'success',
            message: 'data successfully created',
            data: newData
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'Failed',
            message: err.message
        })
    }
}
