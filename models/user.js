'use strict';
const {
  Model
} = require('sequelize');
const { encodePassword } = require('../helpers/bcrypt.js')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Product, { through: "Wishlists", foreignKey: "UserId" })
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email is already exist'
      },
      validate: {
        notNull: {
          args: true,
          msg: "Email cannot be null"
        },
        notEmpty: {
          args: true,
          msg: "Email is required"
        },
        isEmail: {
          args: true,
          msg: "Invalid email format"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Password cannot be null"
        },
        notEmpty: {
          args: true,
          msg: "Password is required"
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: {
          args: true,
          msg: "Username is required"
        }
      }
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: {
          args: true,
          msg: "Phone Number is required"
        }
      }
    },
    address:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: {
          args: true,
          msg: "Address is required"
        }
      }
    },
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = encodePassword(user.password);
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};