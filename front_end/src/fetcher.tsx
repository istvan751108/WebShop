const BASE_URL = "http://localhost:3001";

export const fetcher = async (url: string) => {
  try {
    const response = await fetch(BASE_URL + url);
    const responseData = await response.json();
    return { errorMessage: "", data: responseData };
  } catch (err: any) {
    return { errorMessage: err.message || "Unknown error", data: [] };
  }
};

export const getCategories = () => {
  return fetcher("/categories");
};

export const getProducts = (id: number) => {
  return fetcher("/products?catId=" + id);
};

export const getProductById = (id: number) => {
  return fetcher("/products/" + id);
};

export const getProductsByQuery = (query: any) => {
  return fetcher("/products?q=" + query);
};
