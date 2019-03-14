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
    post: function () {} // a function which can be used to insert a message into the database
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
    post: function () {
      /*
        Add row to user table with new value
      */
    }
  }
};

