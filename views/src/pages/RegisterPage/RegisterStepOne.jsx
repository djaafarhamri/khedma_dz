import worker from "../../assets/408-worker-helmet.svg";
import avatar from "../../assets/268-avatar-man.svg";
import { useState } from "react";

const RegisterStepOne = ({ goToNext }) => {
  const [role, setRole] = useState(null);

  return (
    <div className="flex flex-col items-center w-[45%] h-fit m-10 border border-solid">
      <h1 className="text-3xl mt-10">Join as a client or professional</h1>
      <div className="flex m-10">
        <div
          onClick={() => {
            setRole("professional");
            console.log(role)
          }}
          className={`m-10 rounded-lg relative cursor-pointer hover:bg-[#ebf4fb] flex flex-col items-center justify-center border-2 border-solid h-[192px] w-[192px] ${role === 'professional' ? 'border-[#14a800]' : ''}`}
        >
          <div className={`absolute top-1 right-1 border-2 border-solid rounded-full w-4 h-4 ${(role === 'professional') && "bg-[#14a800]"}`}></div>
          <img className="h-32" src={worker} alt="" />
          <h4>Professional</h4>
        </div>
        <div
          onClick={() => {
            setRole("client");
          }}
          className={`m-10 rounded-lg relative cursor-pointer hover:bg-[#ebf4fb] flex flex-col items-center justify-center border-2 border-solid h-[192px] w-[192px] ${role === 'client' ? 'border-[#14a800]' : ''}`}
        >
          <div className={`absolute top-1 bg-white right-1 border-2 border-solid rounded-full w-6 h-6 ${role === 'client' && "bg-[#14a800]"}`}></div>
          <img className="h-32" src={avatar} alt="" />
          <h4>Client</h4>
        </div>
      </div>
      <button
        className="rounded-lg border border-solid border-[#14a800] text-white bg-[#14a800] m-10 p-2 w-64 font-bold" 
        onClick={() => goToNext({ role })}>Join as a {role}</button>
    </div>
  );
};

export default RegisterStepOne;
