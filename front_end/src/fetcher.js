const BASE_URL = "http://localhost:3001";

export const fetcher =  async (url) => {
    let responseObject = {errorMessage: '', data: []};
    try {
        const response = await fetch(BASE_URL + url);
        const responseData = await response.json();
        responseObject.errorMessage = '';
        responseObject.data = responseData;
    }
    catch (err) {
        responseObject.errorMessage = err.message;
    }
    return responseObject;
}

export const getProductById = id => {
    return fetcher('/products/' + id);
  }
  