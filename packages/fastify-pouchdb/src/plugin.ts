import type { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import PouchDB from 'pouchdb';

export type PouchDbOptions = { 
    /**
     * Specify the database name.
     */
    name: string, 
    /**
     * Specify if should enable database auto compaction.
     *
     * Defaults to false.
     */
    autoCompact?: boolean | undefined, 
    /**
     * If specified appends a prefix to the database name
     * and can be helpful for URL-based or file-based LevelDOWN path names.
     */
    prefix?: string | undefined;
};

const serverPlugin: FastifyPluginAsync<PouchDbOptions> = async (fastify, opts) => {

    const db = new PouchDB(opts.name, { 
        auto_compaction: opts.autoCompact,
        prefix: opts.prefix
    });

    fastify.decorate('pouch', db);
    fastify.decorateRequest('pouch', db);
};

export default fp<PouchDbOptions>(serverPlugin, {
    name: '@pouchr/fastify-pouchdb',
    fastify: '4.x'
})

declare module 'fastify' {
    export interface FastiFyInstance {
        pouch: PouchDB.Database
    }
    
    export interface FastifyRequest {
        pouch: PouchDB.Database
    }
}