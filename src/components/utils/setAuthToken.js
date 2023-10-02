import apiClient from "./api-client";

function setToken(token) {
  if (token) {
    apiClient.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete apiClient.defaults.headers.common["x-auth-token"];
  }
}

export default setToken;
