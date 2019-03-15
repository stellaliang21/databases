var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // let queryString = `select users.name, messages.message, rooms.name from users inner join messages inner join rooms
      // where users.id = messages.user_id and rooms.id = messages.room_id;`;
      let queryString = `SELECT users.user, messages.message,
       messages.roomname FROM messages inner join USERS where users.id = messages.userID`
      db.connection.query(queryString, (err, results) => {
        if (err) {
          callback(err);
        }
        callback(null, results);
      });
    },
      
      /* Join Logic:
      select users.name, messages.message, rooms.name from users inner join messages inner join rooms
      where users.id = messages.user_id and rooms.id = messages.room_id;

      Pseudocode:
      query db (async?) --likely takes a callback to structure data and provide to controller
      */
    // a function which produces all the messages
    post: function (data, cb) {
      // TODO: Implement functionality to handle messages where username doesn't exist (w/ multiple tables)
      let userQuery = `SELECT id FROM users WHERE user = '${data.username}'`;
      db.connection.query(userQuery, (err, userId) => {
        if (err) {
          console.log(err)
          module.exports.users.post(data.username, () => {
            module.exports.messages.post(data, cb);
          });
          return;
        }
        let userID = userId[0].id;
        let queryString = `INSERT INTO messages (message, roomname, userID)
        VALUES ("${data.message}", "${data.roomname}", ${userID})`;
        db.connection.query(queryString, (err, results) => {
          if (err) {
            cb(err);
            throw ('Error posting message to DB');
          }
          cb(null, results);
        });
      });
    }
  },

  users: {
    get: function (callback) {
      let queryString = 'SELECT username from messages';
      db.connection.query(queryString, (err, results) => {
        if (err) {
          callback(err);
        }
        callback(null, results);
      });
      /*
      Query Logic:
      select name from users
      */

    },
    post: function (value, cb) {
      let queryString = `INSERT INTO users (user) VALUES('${value.username}')`;
      db.connection.query(queryString, (err, results, fields)=> {
        if (err) {
          cb(err);
        }
        cb(null, results);
        // console.log(`${results} posted with ${fields}`);
      });
    }
  }
};

