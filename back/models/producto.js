'use strict';
module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define('Producto', {
    titulo: DataTypes.STRING,
    imagePath: DataTypes.TEXT,
    descripcion: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    color: DataTypes.STRING,
    size: DataTypes.STRING,
    cantidad: DataTypes.INTEGER
  }, {});
  Producto.associate = function(models) {
    // associations can be defined here
  };
  return Producto;
};