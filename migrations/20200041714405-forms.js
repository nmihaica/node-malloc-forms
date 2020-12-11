'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('form', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      clientId: {
        type: Sequelize.DataTypes.INTEGER,
        field: 'client_id',
        references: {
          model: 'client',
          key: 'id'
        }
      },
      description: Sequelize.DataTypes.STRING,
      domainName: {
        type: Sequelize.DataTypes.STRING,
        field: 'domain_name'
      },
      replyMail: {
        type: Sequelize.DataTypes.STRING,
        field: 'reply_mail'
      },
      token: {
        type: Sequelize.DataTypes.STRING,
        field: 'token'
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
    return queryInterface.dropTable('form');
  }
}


