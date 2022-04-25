export const user = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_USER":
      const { user } = payload;
      return user;
    case "LOGOUT_USER":
      return null;
    default:
      return state;
  }
};
