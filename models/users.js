"use strict";

const crypto = require("crypto");

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: data => {
          var shasum = crypto.createHmac("sha512", "thisismysecretkey");
          shasum.update(data.dataValues.password);
          data.password = shasum.digest("hex");
        },
        beforeFind: data => {
          if (data.where.password) {
            var shasum = crypto.createHmac("sha512", "thisismysecretkey");
            shasum.update(data.where.password);
            data.where.password = shasum.digest("hex");
          }
        },
      },
    }
  );
  users.associate = function (models) {
    users.belongsToMany(models.stamps, { through: "users_stamps" });
  };
  users.associate = function (models) {
    users.belongsToMany(models.tickets, { through: "users_tickets" });
  };
  return users;
};
