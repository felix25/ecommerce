'use strict';
module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define('cart', {
    items: DataTypes.STRING,
    total: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  cart.associate = function(models) {
    // associations can be defined here
  };
  return cart;
};