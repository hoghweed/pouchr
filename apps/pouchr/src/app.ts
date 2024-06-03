import pouchdb, {type PouchDbOptions} from "@pouchr/fastify-pouchdb";
import requestId from "@web-server-userland/fastify-request-id";
import Fastify, {
  type FastifyInstance,
  type FastifyServerOptions,
} from "fastify";
// import hyperid from "hyperid";
import configuration from "./plugins/configuration.js";

// const uuid = hyperid({ urlSafe: true });

export async function createApp(opts: FastifyServerOptions = {}): Promise<FastifyInstance> {
  const app = Fastify(opts);
  await app.register(configuration);
  await app.register(pouchdb, {
    name: 'pouchr'
  } as PouchDbOptions);
  await app.register(requestId.default);

  return app
}
