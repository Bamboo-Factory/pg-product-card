import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/product.interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      // Forma de Panda:
      const newShoppingCart = {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };

      if (!count) delete newShoppingCart[product.id];

      return newShoppingCart;

      // Forma de Fer:
      // if (!count) {
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      //   return rest;
      // }

      // return {
      //   ...oldShoppingCart,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
