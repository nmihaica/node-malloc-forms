const BaseController = require('@controllers/base.controller.js')
const Form = require('@models').Form
const boom = require('boom')

module.exports = class extends BaseController {
  async getAll(req, reply){
    try {
      let forms = await User.findAll();
      return forms;
    } catch (err) {
      throw boom.boomify(err)
    }
  }
  async getOne(req, reply){
    try {
      const id = req.params.id
      let form = await User.findByPk(id);
      return form;
    } catch (err) {
      throw boom.boomify(err)
    }
  }
}