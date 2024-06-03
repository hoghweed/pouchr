import pouchdb, {type PouchDbOptions} from "@pouchr/fastify-pouchdb";
import Fastify, {
  type FastifyInstance,
  type FastifyServerOptions,
} from "fastify";
// import hyperid from "hyperid";
import configuration from "./plugins/configuration.js";

// const uuid = hyperid({ urlSafe: true });

export function createApp(opts: FastifyServerOptions = {}): FastifyInstance {
  const app = Fastify(opts)
  app.register(configuration)
  app.register(pouchdb, {} as PouchDbOptions);

  return app
}
