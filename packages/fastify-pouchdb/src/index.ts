import fp from "fastify-plugin";
import { plugin } from "./plugin.js";

export type { PouchDbOptions } from "./plugin.js";
export default fp(plugin, {
    name: '@pouchr/fastify-pouchdb',
    fastify: '4.x'
});