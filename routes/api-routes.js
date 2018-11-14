const db = require('../models');

module.exports = function (app) {

    app.get('/message', function (req, res) {
        db.Message.find({})
            .then(function (messageData) {
                res.json(messageData)
            })
            .catch(function (err) {
                res.json(err);

            })
    })


    app.post('/message', function (req, res) {
        db.Message.create(req.body)

            .then(function (messageData) {
                res.json(messageData)
            })
            .catch(function (err) {
                res.json(err);

            })
    })

}
