const BaseController = require('@controllers/base.controller.js')
const Content = require('@models').Content
const boom = require('boom')

module.exports = class extends BaseController {
  async getAll(req, reply){
    try {
      let contents = await Content.findAll();
      return contents;
    } catch (err) {
      throw boom.boomify(err)
    }
  }
  async getOne(req, reply){
    try {
      const id = req.params.id
      let content = await Content.findByPk(id);
      return content;
    } catch (err) {
      throw boom.boomify(err)
    }
  }
  async createOne(req, reply){
    try {
      let content = new Content(req.body);
      let newcontent = await content.save();
      return newcontent
    } catch (err) {
      throw boom.boomify(err)
    }
  }
  async update(req, reply){
    try {
      const id = req.params.id
      let content = await Content.update(req.body, {
        where: {
          id: id
        }
      })
      return content
    } catch (err) {
      throw boom.boomify(err)
    }
  }
  async remove(req, reply){
    try {
      const id = req.params.id
      let content = await Content.destroy({
        where: {
          id: id
        }
      })
      return content
    } catch(err){
      throw boom.boomify(err)
    }
  }
}