"use strict";

module.exports = (sequelize, DataTypes) => {
  const stamps = sequelize.define("stamps", {
    name: DataTypes.STRING,
    number: DataTypes.STRING,
    count: DataTypes.INTEGER,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
  });
  stamps.associate = function (models) {
    stamps.belongsTo(models.users, { foreignKey: "user_id" });
  };
  return stamps;
};
