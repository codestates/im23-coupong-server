"use strict";

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  users.associate = function (models) {
    users.belongsToMany(models.stamps, { through: "users_stamps" });
  };
  users.associate = function (models) {
    users.belongsToMany(models.tickets, { through: "users_tickets" });
  };
  return users;
};
