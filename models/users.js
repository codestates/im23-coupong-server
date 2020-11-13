"use strict";

const stamps = require("./stamps");
const tickets = require("./tickets");

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  users.belongsToMany(tickets, { through: "users_tickets" });
  users.belongsToMany(stamps, { through: "users_stamps" });
  return users;
};
