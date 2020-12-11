'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('content', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      formId: {
        type: Sequelize.DataTypes.INTEGER,
        field: 'form_id',
        references: {
          model: 'form',
          key: 'id'
        }
      },
      note: {
        type: Sequelize.DataTypes.STRING,
        field: 'note'
      },
      content: {
        type: Sequelize.DataTypes.JSON,
        field: 'content'
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
    return queryInterface.dropTable('content');
  }
}


