const BaseController = require('@controllers/base.controller.js')
const Content = require('@models').Content
const Form = require('@models').Form
const boom = require('boom')
const mailService = require('@services/mail.service.js')
const utils = require('@services/utils.service.js')

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
      /* const token = req.params.token */
      let form = await Form.findOne({
        where: {
          token: req.params.token
        }
      })

      let pattern = form.domainName
      if (req.headers.host.search(pattern) !== -1){
        // Submit to database
        let content = new Content({
          formId: form.id,
          content: req.body
        });
        let newcontent = await content.save();

        // Format req.body
        let html = utils.prepareJSON(JSON.parse(req.body))

        // Send Email
        let opt = {
          to: 'placeyouremailhere@gmail.com',
          subject: `[FORM]` + ` ` + `${form.domainName}`,
          html: `
            <p>Form submission</p>
            ${html}
          `
        }

        // Establish new callback
        let cb = function (error, response) {
          if (error)
            console.log(error);
          else
            console.log("mail sent");
        }
        mailService.sendMail(opt, cb)
        return newcontent
      }
      else {
        return {
          msg: 'Cannot submit from this host'
        }
      }
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