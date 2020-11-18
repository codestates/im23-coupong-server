"use strict";

module.exports = (sequelize, DataTypes) => {
  const tickets = sequelize.define("tickets", {
    title: DataTypes.STRING,
    curNum: DataTypes.INTEGER,
    maxNum: DataTypes.INTEGER,
    is_used: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
    tickets_group_id: DataTypes.INTEGER,
  });
  tickets.associate = function (models) {
    tickets.belongsTo(models.users);
  };
  return tickets;
};
