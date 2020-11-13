"use strict";

const users = require("./users");

module.exports = (sequelize, DataTypes) => {
  const stamps = sequelize.define("stamps", {
    name: DataTypes.STRING,
    number: DataTypes.STRING,
    count: DataTypes.INTEGER,
  });
  stamps.associate = function (models) {
    stamps.belongsToMany(models.users, { through: "users_stamps" });
  };
  return stamps;
};
