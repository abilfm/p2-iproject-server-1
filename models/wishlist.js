'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Wishlist.belongsTo(models.User, { foreignKey: 'UserId' })
      Wishlist.belongsTo(models.Product, { foreignKey: 'ProductId' })
    }
  };
  Wishlist.init({
    ProductId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: "Product ID is required"
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: "User ID is required"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Wishlist',
  });
  return Wishlist;
};