'use strict';

let forms = require('./data/forms')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('form', forms, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('form', null, {})
  }
};
