export async function fetchProducts() {
  const response = await fetch("http://localhost:3001/products");
  if (!response.ok) {
    throw new Error("Erro ao obter os produtos");
  }
  return response.json();
}
