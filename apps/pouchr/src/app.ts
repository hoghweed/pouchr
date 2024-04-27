import Fastify, {
  type FastifyInstance,
  type FastifyServerOptions,
} from "fastify"
import hyperid from "hyperid"
import configuration from "./plugins/configuration.js"

const uuid = hyperid({ urlSafe: true })

export function createApp(opts: FastifyServerOptions = {}): FastifyInstance {
  const app = Fastify(opts)
  app.register(configuration)

  return app
}
