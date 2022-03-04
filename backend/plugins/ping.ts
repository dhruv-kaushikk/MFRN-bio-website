import { FastifyInstance } from 'fastify'

async function routes(fastify: FastifyInstance) {
    fastify.get('/ping', async function (request, reply) {
        return 'pong'
    })
}

module.exports = routes
