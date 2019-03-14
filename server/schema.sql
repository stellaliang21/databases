DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

  /* Pseudocode: Create Table
  Column 1 : ID, Integer, Auto-increment, Primary Key
  Column 2 : Messages Text NOT NULL,
  Column 3 : Room_ID, Integer
  Column 4 : User_UD, Integer
  */
CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  message TEXT NOT NULL,
  roomname TEXT NOT NULL,
  -- room_id INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  user TEXT NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  room TEXT NOT NULL,
  PRIMARY KEY (id)
);



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

