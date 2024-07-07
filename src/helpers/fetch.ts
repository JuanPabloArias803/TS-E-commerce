export async function fetchProducts(
  path: string = 'https://fakestoreapi.com/products'
) {
  const response = await fetch(path);
  const data = await response.json();
  return data;
}
