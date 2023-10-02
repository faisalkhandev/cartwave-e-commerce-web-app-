import apiClient from "../utils/api-client";

export function addToCartAPI(id, quantity) {
  return apiClient.post(`/cart/${id}`, { quantity });
}

export function getCartPI() {
  return apiClient.get("/cart");
}
