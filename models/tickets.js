"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.tickets.belongsToMany(models.users, {
        through: models.users_tickets,
        foreignKey: "ticket_id",
        onDelete: "CASCADE",
      });
    }
  }
  tickets.init(
    {
      name: DataTypes.STRING,
      number: DataTypes.STRING,
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tickets",
    }
  );
  return tickets;
};
