import fsPromises from "node:fs/promises";
import path from "node:path";

import {fastifyStatic} from "@fastify/static";

const PROJECTS_FILE_PATH = "projects.json";

async function routes(fastify, options) {
    // Add route for main site
    await fastify.register(fastifyStatic, {
        decorateReply: false,
        prefix: "/",
        redirect: true,
        root: path.resolve(options.buildDir, "html"),
    });

    // Load the projects config
    let fileHandle = null;
    let projects = [];
    try {
        fileHandle = await fsPromises.open(PROJECTS_FILE_PATH, "r");
        const data = await fileHandle.readFile("utf-8");
        projects = JSON.parse(data);
    } catch (e) {
        fastify.log.error(e);
        return;
    } finally {
        if (null !== fileHandle) {
            fileHandle.close();
        }
    }

    // Add route for each project and version
    for (const project of projects) {
        for (const version of project.versions) {
            await fastify.register(fastifyStatic, {
                decorateReply: false,
                root: path.resolve(options.buildDir, project.name, "build", "docs", "html"),
                prefix: `/${project.name}/${version}`,
                redirect: true,
            });
        }
    }
}

export default routes;
