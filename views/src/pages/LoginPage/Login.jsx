import { connect } from "react-redux";
import { login } from "../../stores/userStore/userThunk";
import logo from "../../assets/labour.jpeg";
import { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-3">
        <div className="py-8">
          <img width="100" className="-mt-10" src={logo} alt="" />
        </div>
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="p-3 border-[1px] border-slate-500 rounded-sm w-80"
          placeholder="Username"
        />
        <div className="flex flex-col space-y-1">
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border-[1px] border-slate-500 rounded-sm w-80"
            placeholder="Password"
          />
          <p className="font-bold text-[#0070ba]">Forgot password?</p>
        </div>
        <div className="flex flex-col space-y-5 w-full">
          <button
            onClick={() => {
              onLogin(username, password);
            }}
            className="w-full bg-[#0070ba] rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-[#003087]"
          >
            Log in
          </button>
          <div className="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
            <div className="-mt-1 font-bod bg-white px-5 absolute">Or</div>
          </div>
          <button className="w-full border-blue-900 hover:border-[#003087] hover:border-[2px] border-[1px] rounded-3xl p-3 text-[#0070ba] font-bold transition duration-200">
            Sign Up
          </button>
        </div>
        <div className="flex space-x-1 p-20 text-sm">
          <p className="hover:underline cursor-pointer">German</p>
          <div className="border-r-[1px] border-r-slate-300"></div>
          <p className="font-bold hover:underline cursor-pointer">English</p>
        </div>
      </div>

      <div className="absolute bottom-0 w-full p-3 bg-[#F7F9FA] flex justify-center items-center space-x-3 text-[14px] font-medium text-[#666]">
        <a
          href="https://www.paypal.com/us/smarthelp/contact-us"
          className="hover:underline underline-offset-1 cursor-pointer"
        >
          Contact Us
        </a>
        <a
          href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full"
          className="hover:underline underline-offset-1 cursor-pointer"
        >
          Privacy
        </a>
        <a
          href="https://www.paypal.com/de/webapps/mpp/ua/legalhub-full"
          className="hover:underline underline-offset-1 cursor-pointer"
        >
          Legal
        </a>
        <a
          href="https://www.paypal.com/de/webapps/mpp/ua/upcoming-policies-full"
          className="hover:underline underline-offset-1 cursor-pointer"
        >
          Policy{" "}
        </a>
        <a
          href="https://www.paypal.com/de/webapps/mpp/country-worldwide"
          className="hover:underline underline-offset-1 cursor-pointer"
        >
          Worldwide{" "}
        </a>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (username, password) => {
      dispatch(login(username, password));
    }
  };
};

export default connect(null, mapDispatchToProps)(Login);
