import fastify from 'fastify'
import autoLoad from 'fastify-autoload';
import {join} from 'path';
const server = fastify()

server.register(autoLoad, {
	dir: join(__dirname, 'plugins'),
	options: {prefix: '/api'}
})
server.listen(3001, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})