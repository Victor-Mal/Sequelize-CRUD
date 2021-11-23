"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Order, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      firstName: {
        field: "first_name",
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      lastName: {
        field: "last_name",
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      birthdate: {
        type: DataTypes.DATE,
        validate: {
          isDate: true,
        },
      },
    },

    {
      sequelize,
      modelName: "User",
      tableName: "users",
      underscored: true
    }
  );
  return User;
};
