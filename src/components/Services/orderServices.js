import apiClient from "../utils/api-client";

export function checkOutAPI() {
  return apiClient.post("/order/checkout");
}
