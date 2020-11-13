"use strict";

const users = require("./users");

module.exports = (sequelize, DataTypes) => {
  const tickets = sequelize.define("tickets", {
    name: DataTypes.STRING,
    number: DataTypes.STRING,
    count: DataTypes.INTEGER,
  });
  tickets.belongsToMany(users, { through: "users_tickets" });
  return tickets;
};
