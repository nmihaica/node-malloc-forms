// Require the framework and instantiate it
const PORT = 4000
const fastify = require('fastify')
const aliases = require("./aliases")
const db = require('@models')
const routers = require("@routers");
let authMiddleware = require('@services/auth.service.js')

const app = fastify({
  logger: {
    prettyPrint: true
  }
})

/* NOTE: Do this only in DEVELOPMENT */
/* app.use(cors()) */
app.options('*', (request, reply) => { reply.send() })
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST")
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-WIth, Content-Type, Accept")
  next()
})


db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

// Declare a route
app.get('/', async (request, reply) => {
  /* return { hello: 'node-malloc-forms is working' } */
  let pattern = `localhost:4000`
  console.log('PROVJERA')
  console.log(request.headers.host.search(pattern))
  if (request.headers.host.search(pattern) !== -1){
    return {
      msg: 'Cannot submit from this host'
    }
    
  }
  else {
    return 'Yes'
  }
})

// Setup routes
routers.forEach(routes => {
  routes.forEach((route, index) => {
    /* console.log('Here is route', route) */
    let pattern = /api/
    /**
     * If url does contain /api/ subroute
     * then prepend auth prehandler
     */
    if (route.url.search(pattern) !== -1){
      // Issue on github
      // how to add middleware to some requests but not to all
      // https://github.com/fastify/fastify/issues/740

      // NOTE: be careful as req is Fastify req object not node object. req.req
      route.preHandler = (req, reply, next) => {
        authMiddleware(req, reply, next)
      }
      console.log('Prepending auth to route', route.url)
      app.route(route)
    }
    else {
      /* console.log('Do not DO auth', route.url) */
      app.route(route)
    }
    
  })
})

// Run the server!
const start = async () => {
  try {
    await app.listen({
      port: PORT,
      host: '0.0.0.0'
    })
    app.log.info(`server listening on ${app.server.address().port}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start();