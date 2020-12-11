'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('client', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        field: 'name'
      },
      description: {
        type: Sequelize.DataTypes.STRING,
        field: 'description'
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE, field: 'created_at'
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE, field: 'updated_at'
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('client');
  }
}


