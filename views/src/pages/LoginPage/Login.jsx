import { connect } from "react-redux";
import { login } from "../../stores/userStore/userThunk";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  return (
    <div className="flex items-center justify-center h-fit mt-24">
      <div className="flex flex-col items-center justify-center lg:w-[40%] w-[100%] h-fit  border border-solid">
        <h1 className="lg:text-3xl text-xl m-10">Sign In</h1>
        {/* login form */}
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="w-[80%] py-2 px-4 m-3 border border-solid"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="w-[80%] py-2 px-4 m-3 border border-solid"
          type="password"
          placeholder="Password"
        />
        <button
          className="rounded-lg border border-solid border-[#14a800] text-[#fff] bg-[#14a800] m-10 p-2 w-64 font-bold"
          onClick={() =>
            email && password
              ? onLogin(email, password, nav)
              : alert("Please fill out all fields")
          }
        >
          Sign In
        </button>
        <p>dont have an account yet?</p>
        <button
          className="rounded-lg border-2 border-solid border-[#14a800] m-10 p-2 w-64 font-bold"
          onClick={() => nav('/register')}
        >
          Sign Up
        </button>

      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password, nav) => {
      dispatch(login(email, password, nav));
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
