'use strict';

let contents = require('./data/contents')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('content', contents, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('content', null, {})
  }
};
