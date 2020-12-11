const Controller = require('../controllers/client')
const controller = new Controller()

const Routes = [
  { method: 'GET', url: '/api/clients', handler: controller.getAll },
  { method: 'GET', url: '/api/client/all', handler: controller.getAll },
  { method: 'GET', url: '/api/client/:id', handler: controller.getOne },
]

module.exports = Routes