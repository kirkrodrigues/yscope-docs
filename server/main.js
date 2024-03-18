"use strict";

import path from "node:path";

import Fastify from "fastify";
import "dotenv/config.js";

import routes from "./routes.js";

const fastify = Fastify({
    logger: true
});

const start = async () => {
    try {
        await fastify.register(routes, {buildDir: path.resolve(process.env.BUILD_DIR)});

        const host = process.env.HOST;
        const port = process.env.PORT;
        await fastify.listen({host: host, port: port});
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start();
