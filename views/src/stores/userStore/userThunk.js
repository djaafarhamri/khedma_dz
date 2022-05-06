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

export const register = (data) => async (dispatch) => {
  console.log('dispatching register');
  await axios
    .post("http://localhost:4000/signup", data) //withCredentials: true
    .then((res) => {
      console.log('done');
    })
    .catch((err) => {
      console.log(err);
    });
};
