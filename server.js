// Require the framework and instantiate it
const PORT = 4000
const fastify = require('fastify')({ logger: true })
const aliases = require("./aliases")
const db = require('@models')

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'node-malloc-forms is working' }
})

// Declare a route
fastify.post('form/:token', async (request, reply) => {
  return { msg: 'Form submitted' }
})

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

// Run the server!
const start = async () => {
  try {
    await fastify.listen(PORT)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()