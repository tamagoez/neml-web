"use strict";
const path = require("node:path");

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    return { root: true };
  });

  fastify.register(require("@fastify/static"), {
    root: path.join(__dirname, ""),
  });

  fastify.get("/example/test", function (req, reply) {
    reply.sendFile("/example/test.html"); // sending path.join(__dirname, 'public', 'myHtml.html') directly with custom filename
  });
};
