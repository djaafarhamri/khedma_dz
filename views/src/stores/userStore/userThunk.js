import axios from "axios";

export const login = (username, password) => async (dispatch) => {
  await axios
    .post(
      "http://localhost:4000/login",
      { username, password },
      { withCredentials: true }
    )
    .then((res) => {
      dispatch({
        type: "LOGIN_USER",
        payload: { user: res.data.user },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logout = () => async (dispatch) => {
  await axios
    .get("http://localhost:4000/logout", { withCredentials: true })
    .then((res) => {
      dispatch({
        type: "LOGOUT_USER",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
