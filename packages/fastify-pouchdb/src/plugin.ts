import type { FastifyInstance, FastifyPluginAsync } from "fastify";
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

export const plugin : FastifyPluginAsync<PouchDbOptions> = async (fastify: FastifyInstance , opts: PouchDbOptions) => {
    const db = new PouchDB(opts.name, { 
        auto_compaction: opts.autoCompact,
        prefix: opts.prefix
    });

    fastify.decorate('pouch', db);
    fastify.decorateRequest('pouch', db);
};

declare module 'fastify' {
    export interface FastiFyInstance {
        pouch: PouchDB.Database
    }
    
    export interface FastifyRequest {
        pouch: PouchDB.Database
    }
}