import { backendUrl } from "./config";
export const makeUnauthenticatedPOSTRequest = async (route, body) => {
  const response = await fetch(backendUrl + route, {
    method: "POST",
    herders: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const formattedResponse = await response.json();
  return formattedResponse;
};

export const makeAuthenticatedPOSTRequest = async (route, body) => {
  const token = getToken();
  const response = await fetch(backendUrl + route, {
    method: "POST",
    herders: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
  const formattedResponse = await response.json();
  return formattedResponse;
};

const getToken = () => {
  const accessToken = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  return accessToken;
};
