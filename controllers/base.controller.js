/**
 * Base controller set to be a Template
 * for derivative Resource controller.
 * Intended for 
 * fetching,
 * updating,
 * deleting resources
 */

 /**
  * Table of equivalency for Sequelize\Controller
  * useful for implementing
  * 
  * findOne\getOne
  * findAll\getAll
  * create\createOne
  * bulkCreate\createMany
  * findAll\getAll
  * findOne\getOne
  * update\update
  * destroy\delete
  * 
  * overload functions to implement them.
  */

 module.exports = class BaseController {
  constructor(opt){
    this.options = opt
  }
  getAll(req, reply){
    reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ msg: 'GETALL is not implemented.' })
  }
  getOne(req,res){
    reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ msg: 'GETONE is not implemented' })
  }
  createOne(req,res){
    reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ msg: 'CREATEONE is not implemented' })
  }
  createMany(req,res){
    reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ msg: 'CREATEMANY is not implemented' })
  }
  update(req,res){
    reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ msg: 'UPDATE is not implemented' })
  }
  remove(req,res){
    reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ msg: 'REMOVE is not implemented' })
  }
  print(req,res){
    reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ msg: 'PRINT is not implemented' })
  }
  exportResourceData(req,res){
    reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ msg: 'EXPORTRESOURCEDATA Not implemented' })
  }
}
