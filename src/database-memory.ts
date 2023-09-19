import { randomUUID } from "node:crypto";

interface Product {
  name: string;
  description: string;
  price: number;
}

export class DatabaseMemory {
  #products = new Map<string,Product>();
  
  create(product: Product) {
    const itemId = randomUUID()

    this.#products.set(itemId, product);
  }
}
