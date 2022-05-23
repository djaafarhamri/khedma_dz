import { useState } from "react";

const RegisterForm = ({ goToNext }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center h-screen w-screen">
    <div className="flex flex-col items-center justify-center  lg:w-[40%] w-[100%] h-fit m-10 border border-solid rounded-lg ">
      <h1 className="lg:text-3xl text-xl m-10">Sign Up</h1>
      {/* register form */}

      {/*<div className="flex w-[80%] justify-between m-3">
        <input
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          className="w-[45%] py-2 px-4 border border-solid"
          type="text"
          placeholder="First Name"
        />
        <input
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          className="w-[45%] py-2 px-4 border border-solid"
          type="text"
          placeholder="Last Name"
        />
        </div>*/}
        
          <div class="relative mb-2 mt-5">
                       <input id="First name" name="Firstrst name" 
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                       type="text" class="peer h-10 w-96 border-b-2 border-gray-300 text-dark-blue placeholder-transparent focus:outline-none focus:border-green-cyan" placeholder="‏‏‎ ‎" />
                       <label for="First name" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-dark-blue peer-focus:text-base">First Name</label>
          </div>
          <div class="relative mb-2 mt-5">
                       <input id="Last name" name="Last name" 
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                       type="text" class="peer h-10 w-96 border-b-2 border-gray-300 text-dark-blue placeholder-transparent focus:outline-none focus:border-green-cyan" placeholder="‏‏‎ ‎" />
                       <label for="Last name" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-dark-blue peer-focus:text-base">Last Name</label>
                  </div>
        
        
        <div class="relative mb-2 mt-5">
                       <input id="Email" name="Email" 
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                       type="email" class="peer h-10  w-96 border-b-2 border-gray-300 text-dark-blue placeholder-transparent focus:outline-none focus:border-green-cyan" placeholder="‏‏‎ ‎" />
                       <label for="Email" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-dark-blue peer-focus:text-base">Email</label>
                  </div>
                  <div class="relative mb-2 mt-5">
                       <input id="Password" name="Password" 
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                       type="password" class="peer h-10 w-96  border-b-2 border-gray-300 text-dark-blue placeholder-transparent focus:outline-none focus:border-green-cyan" placeholder="‏‏‎ ‎" />
                       <label for="Password" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-dark-blue peer-focus:text-base">Password</label>
                  </div>
      <button
        className="rounded-lg border border-solid border-green-cyan text-[#fff] bg-green-cyan m-10 p-2 w-64 font-bold"
        onClick={() =>
          firstName && lastName && email && password
            ? goToNext({firstName, lastName, email, password})
            : alert("Please fill out all fields")
        }
      >
        Create My Account
      </button>
    </div>
    </div>
  );
};

export default RegisterForm;
