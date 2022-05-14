export const LOGIN_USER = "LOGIN_USER";

export const loginUser = (user, role) => {
  return {
    type: LOGIN_USER,
    payload: {user, role},
  };
};

export const LOGOUT_USER = "LOGOUT_USER";

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
