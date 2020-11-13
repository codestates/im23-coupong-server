"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class stamps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      stamps.belongsToMany(models.users, {
        through: models.users_stamps,
        foreignKey: "stamps_id",
        onDelete: "CASCADE",
      });
    }
  }
  stamps.init(
    {
      name: DataTypes.STRING,
      number: DataTypes.STRING,
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "stamps",
    }
  );
  return stamps;
};
