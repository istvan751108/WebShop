const BASE_URL = "http://localhost:3001";

export const fetcher = async (url: string) => {
  let responseObject = { errorMessage: "", data: [] };
  try {
    const response = await fetch(BASE_URL + url);
    const responseData = await response.json();
    responseObject.errorMessage = "";
    responseObject.data = responseData;
  } catch (err) {
    // responseObject.errorMessage = err.message;
  }
  return responseObject;
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
  return fetcher('/products?q=' + query);
}