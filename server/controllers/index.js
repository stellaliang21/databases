var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //receives an incoming GET request for all messages
      //writes 200, headers to response.head
      //request messages from model
      //if messages, respond
      //res.end
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //receives an incoming POST request to messages URL
      //sends request to model to post message data
      //if error, returns error
      //otherwise res.end


    } // a function which handles posting a message to the database

  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //receives a get request for all users
      //send request to the model for all users
      //if err return err
      //if no err we write all the users to the response and then send it back
    },
    post: function (req, res) {
      //receives a post request
      //send request to the model
      //if err, return err
      //else res.end
    }
  }
};

