import { decodeToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage("accessToken", accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage("accessToken");

  if (authToken) {
    const decodedData = decodeToken(authToken);
    return decodedData;
  } else {
    return null;
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage("accessToken");

  if (!authToken) {
    return false;
  }

  const decodedData = decodeToken(authToken);

  const tokenIsValid =
    decodedData && (decodedData.exp ?? 0) * 1000 > Date.now();

  if (!tokenIsValid) {
    logoutUser();
  }

  return !!authToken;
};

export const logoutUser = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userInfo");

  return;
};
