import axios from "axios";

export const login = (email, password, nav) => async (dispatch) => {
  await axios
    .post(
      "http://localhost:4000/login",
      { email, password },
      { withCredentials: true, credentials: "include" }
    )
    .then((res) => {
      dispatch({
        type: "LOGIN_USER",
        payload: {
          user: res.data.user,
          role: res.data.role,
        },
      });
      nav("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logout = (nav) => async (dispatch) => {
  await axios
    .get("http://localhost:4000/logout", { withCredentials: true })
    .then((res) => {
      dispatch({
        type: "LOGOUT_USER",
      });
      nav("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const register = (data, cb) => async (dispatch) => {
  console.log("dispatching register: ", data);
  await axios
    .post("http://localhost:4000/signup", data) //withCredentials: true
    .then((res) => {
      cb(true);
      console.log("done");
    })
    .catch((err) => {
      cb(false);
      console.log(err);
    });
};
// get user
export const getUser = (id) => async (dispatch) => {
  await axios
    .get(`http://localhost:4000/get_user/${id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
// check user
export const checkUser = (setIsLoading) => async (dispatch) => {
  await axios
    .get("http://localhost:4000", { withCredentials: true })
    .then((res) => {
      dispatch({
        type: "LOGIN_USER",
        payload: { user: res.data.user, role: res.data.role },
      });
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
      console.log(err);
    });
};
//add service

export const addService = (data) => async (dispatch) => {
  axios
    .post("http://localhost:4000/add_service", data)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
