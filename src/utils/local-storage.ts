export const setToLocalStorage = (key: string, value: any) => {
  if (typeof window === "undefined" || !key) {
    return "";
  }

  if (typeof value === "object") {
    value = JSON.stringify(value);
  }

  return localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key: string): any => {
  if (typeof window === "undefined" || !key) {
    return "";
  }

  if (key === "userInfo") {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  return localStorage.getItem(key);
};
