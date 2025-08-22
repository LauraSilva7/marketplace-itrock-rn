const BASE_URL = "https://dummyjson.com/products";

import { Product, ProductsResponse } from "@/src/types/products";

export const fetchProducts = async (limit: number, skip: number): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}?limit=${limit}&skip=${skip}`);
  const data: ProductsResponse = await res.json();
  return data.products;
};
