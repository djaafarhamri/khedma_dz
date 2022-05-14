export const user = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_USER":
      const { user, role } = payload;
      return {user, role};
    case "LOGOUT_USER":
      return null;
    default:
      return state;
  }
};
