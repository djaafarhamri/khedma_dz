import { useState } from "react";

const RegisterForm = ({ goToNext }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center justify-center lg:w-[40%] w-[100%] h-fit m-10 border border-solid">
      <h1 className="lg:text-3xl text-xl m-10">Sign Up</h1>
      {/* register form */}

      <div className="flex w-[80%] justify-between m-3">
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
      </div>
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
          firstName && lastName && email && password
            ? goToNext({firstName, lastName, email, password})
            : alert("Please fill out all fields")
        }
      >
        Create My Account
      </button>
    </div>
  );
};

export default RegisterForm;
