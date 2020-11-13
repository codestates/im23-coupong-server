"use strict";

const users = require("./users");

module.exports = (sequelize, DataTypes) => {
  const tickets = sequelize.define("tickets", {
    name: DataTypes.STRING,
    number: DataTypes.STRING,
    count: DataTypes.INTEGER,
  });
  tickets.associate = function (models) {
    tickets.belongsToMany(models.users, { through: "users_tickets" });
  };
  return tickets;
};
