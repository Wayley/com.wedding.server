'use strict';
module.exports = (sequelize, DataTypes) => {
  var Gift = sequelize.define('Gift', {
    title: DataTypes.STRING
  });

  Gift.associate = function(models) {
    models.Gift.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Gift;
};
