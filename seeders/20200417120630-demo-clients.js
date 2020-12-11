'use strict';

let clients = require('./data/clients')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('client', clients, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('client', null, {})
  }
};
