const Controller = require('../controllers/form')
const controller = new Controller()

const Routes = [
  { method: 'GET', url: '/api/form', handler: controller.getAll },
  { method: 'GET', url: '/api/form/all', handler: controller.getAll },
  { method: 'GET', url: '/api/form/:id', handler: controller.getOne },
  /* { method: 'POST', url: '/api/content/:token', handler: controller.createOne }, */
]

module.exports = Routes