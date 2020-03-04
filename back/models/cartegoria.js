'use strict';
module.exports = (sequelize, DataTypes) => {
  const cartegoria = sequelize.define('cartegoria', {
    type: DataTypes.STRING
  }, {});
  cartegoria.associate = function(models) {
    // associations can be defined here
  };
  return cartegoria;
};