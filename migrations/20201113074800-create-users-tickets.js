"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users_tickets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.UUID,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "user_id",
        },
      },
      ticket_id: {
        type: Sequelize.UUID,
        onDelete: "CASCADE",
        references: {
          model: "tickets",
          key: "ticket_id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users_tickets");
  },
};
