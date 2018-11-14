const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChatSchema = new Schema({

    messages: [{
      type: Schema.Types.ObjectId,
      ref: 'Message'
    }],

    userName: [{
      user1: String,
      user2: String,
    }]

});

var Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;