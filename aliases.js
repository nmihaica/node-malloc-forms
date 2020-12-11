var path = require('path')
var moduleAlias = require('module-alias')

module.exports = (function(){
  moduleAlias.addAliases({
    '@root': __dirname,
    '@controllers': __dirname + '/controllers',
    '@models': __dirname + '/models',
    '@routers': __dirname + '/routers',
    '@services': __dirname + '/services'
  })
})()