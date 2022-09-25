import { Product } from "../interfaces/product.interfaces";

const product1 = {
  id: "1",
  title: "Chocolate Mug",
  img: "./coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "Chocolate Mug 2",
  img: "./coffee-mug2.png",
};

export const products: Product[] = [product1, product2];
