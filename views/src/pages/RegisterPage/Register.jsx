import { useState } from "react";
import RegisterOnboarding from "./RegisterOnboarding";
import RegisterStepOne from "./RegisterStepOne";
import RegisterStepTwo from "./RegisterStepTwo";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const [currIndex, setCurrIndex] = useState(0);

  const onNext = (stepData) => {
    setRegisterData({ ...registerData, ...stepData });
    setCurrIndex(currIndex + 1);
  };

  return (
    <div className="h-screen flex justify-center">
      <RegisterOnboarding
        onFinish={() => {
          console.log("registerData : ", registerData);
        }}
        currIndex={currIndex}
        onNext={onNext}
      >
        <RegisterStepOne />
        <RegisterStepTwo />
      </RegisterOnboarding>
    </div>
  );
};

export default Register;
