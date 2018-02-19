DROP DATABASE if exists burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INTEGER auto_increment,
  burger_name VARCHAR(100),
  devoured BOOLEAN not null default 0,
  date TIMESTAMP NOT NULL,
  primary key (id)
);