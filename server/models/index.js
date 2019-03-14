var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      let queryString = `select users.name, messages.message, rooms.name from users inner join messages inner join rooms
      where users.id = messages.user_id and rooms.id = messages.room_id;`

      
      /* Join Logic:
      select users.name, messages.message, rooms.name from users inner join messages inner join rooms
      where users.id = messages.user_id and rooms.id = messages.room_id;

      Pseudocode:
      query db (async?) --likely takes a callback to structure data and provide to controller
      */
    }, // a function which produces all the messages
    post: function (data, cb) {
      let userQuery = `SELECT FROM USERS (id) WHERE name = ${data.username}`;
      db.connection.query(userQuery, (err, user_id, fields) => {
        if (err) {
          module.exports.users.post(username);
        }
        let queryString = `INSERT INTO messages (message, user_id, roomname) VALUES (${data.message}, ${user_id}, ${data.roomname})`
        db.connection.query(queryString, (err, results) => {
          if (err) {
            throw ('Error posting message to DB');
          }
        cb(null, results);
        console.log(results);
        });
      });
    }
     // a function which can be used to insert a message into the database
    /*
    Query if user and rooms already exist--if not, 
      add room; or
      add user
    Then add message:
    Insert logic:
    -TBD

    */
  },

  users: {
    // Ditto as above.
    get: function () {

      /*
      Query Logic:
      select name from users
      */

    },
    post: function (value, cb) {
      let queryString = `INSERT INTO users (user) VALUES(${value})`;
      db.connection(queryString, (err, results, fields)=> {
        if (err) {
          throw ('Error: writing user to DB');
        }
        cb(null, results);
        console.log(`${results} posted with ${fields}`);
      });
    }
  }
};

