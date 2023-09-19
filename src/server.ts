import fastify from "fastify";
import { DatabaseMemory, Product } from "./database-memory";

const server = fastify()
const database = new DatabaseMemory()

server.get("/", (resquest, replay) => {
  return replay.status(201).send()
})

server.post("/create-product", (resquest, replay) => {
  const { name,description,price } = resquest.body as Product;
  database.create({
    name,
    description,
    price
  })
  return replay.status(201).send();

})


server.listen({
  port: 3333,

})