var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          console.log(err);
          res.end(err);
        }
        res.end(JSON.stringify(results));
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      if (!req.body.message || !req.body.username || !req.body.roomname) {
        res.status(400).send({error: true, message: 'Please provide a valid message, username, or roomname'});
      } else {
        models.messages.post(req.body, (err, results) => {
          if (err) {
            res.send(err);
          }
          res.end();
        });
      }

    } // a function which handles posting a message to the database

  },

  users: {
    get: function (req, res) {
      models.users.get((err, results) => {
        if (err) {
          res.send(err);
        }
        res.end(JSON.stringify(results));
      });
      //receives a get request for all users
      //send request to the model for all users
      //if err return err
      //if no err we write all the users to the response and then send it back
    },
    post: function (req, res) {
      if (!req.body.username) {
        res.status(400).send({error: true, message: 'Please provide a username when adding a message'});
      } else {
        models.users.post(req.body, (err) => {
          if (err) {
            res.send(err);
          }
          res.end();
        });
      }
    }
  }
};

