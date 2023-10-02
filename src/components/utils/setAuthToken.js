import apiClient from "./api-client";

function setAuthToken(token) {
  if (token) {
    apiClient.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete apiClient.defaults.headers.common["x-auth-token"];
  }
}

export default setAuthToken;
