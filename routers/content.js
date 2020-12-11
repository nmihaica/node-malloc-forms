const Controller = require('../controllers/content')
const controller = new Controller()

const Routes = [
  { method: 'GET', url: '/api/content', handler: controller.getAll },
  { method: 'GET', url: '/api/content/all', handler: controller.getAll },
  { method: 'GET', url: '/api/content/:id', handler: controller.getOne },
  /* { method: 'POST', url: '/api/content/:token', handler: controller.createOne }, */
  // Publicly accessible route
  { method: 'POST', url: '/content/:token', handler: controller.createOne }, 
  { method: 'PUT', url: '/api/content/:id/:token', handler: controller.update },
  { method: 'DELETE', url: '/api/content/:id', handler: controller.remove }
]

module.exports = Routes