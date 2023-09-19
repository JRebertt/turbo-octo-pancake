import fastify from "fastify";

const server = fastify()

server.get("/", (resquest, replay) => {
  return replay.status(201).send()
})




server.listen({
  port: 3333,

})