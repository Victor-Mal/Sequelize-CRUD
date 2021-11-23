"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  Order.init(
    {
      productName: {
        field: "product_name",
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },

      customerId: {
        field: "customer_id",
        type: DataTypes.INTEGER,
        references: { model: "User", key: "id" },
      },

      quantity: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },

      shipped: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      shippedDate: {
        field: "shipped_date",
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "orders",
      underscored: true,
    }
  );
  return Order;
};
