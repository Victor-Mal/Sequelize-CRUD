"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      productName: {
        field: "product_name",
        type: Sequelize.STRING,
        allowNull: false,
      },

      customerId: {
        field: "customer_id",
        type: Sequelize.INTEGER,
        references: { model: "User", key: "id" },
      },

      quantity: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },

      shipped: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      shippedDate: {
        field: "shipped_date",
        type: Sequelize.DATE,
        allowNull: false,
      },

      createdAt: {
        field: "created_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("orders");
  },
};
