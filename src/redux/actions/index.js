export const setIsLoggedIn = (value) => {
  return {
    type: "login",
    payload: value
  };
};

export const setUsersData = (value) => {
  return {
    type: "ADD_USER",
    payload: value
  };
};
export const logout = () => {
  return {
    type: "logout",
    payload: false
  };
};