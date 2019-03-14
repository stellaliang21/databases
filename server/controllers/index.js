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
      if(!req.body.message || !req.body.username || !req.body.roomname) {
        res.status(400).send({error: true, message: `Please provide a valid message, username, or roomname`})
      } else {
        models.messages.post(req.body, (err, results) => {
          if (err) {
            res.send(err);
          }
          res.end(results)
        })
      }

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
      if (!req.body.username) {
        res.status(400).send({error:true, message: `Please provide a username when adding a message`})
      } else {
        models.users.post(req.body, (err, results) => {
          if (err) {
            res.send(err);
          }
          res.end(results)
        })
      }
      //receives a post request
      //checks if request contains a username property in body
        //if not, throws 400 error
        //if so:
          //send request to the model
          //if err, return err
          //else res.end
    }
  }
};

