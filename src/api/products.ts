const BASE_URL = "https://dummyjson.com/products";

export const fetchProducts = async (limit: number, skip: number) => {
  const res = await fetch(`${BASE_URL}?limit=${limit}&skip=${skip}`);
  const data = await res.json();
  return data.products;
};