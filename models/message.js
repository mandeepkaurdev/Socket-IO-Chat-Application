const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({

    sender: {
        type: String,
    },

    message: {
        type: String,
    }
});

var Message = mongoose.model('Message', MessageSchema);

module.exports = Message;