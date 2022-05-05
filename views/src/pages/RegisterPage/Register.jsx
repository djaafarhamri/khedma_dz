import { useState } from "react";
import RegisterEducation from "./RegisterEducation";
import RegisterExperience from "./RegisterExperience";
import RegisterForm from "./RegisterForm";
import RegisterJob from "./RegisterJob";
import RegisterOnboarding from "./RegisterOnboarding";
import RegisterRole from "./RegisterRole";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const [currIndex, setCurrIndex] = useState(0);

  const onNext = (stepData) => {
    setRegisterData({ ...registerData, ...stepData });
    setCurrIndex(currIndex + 1);
  };

  const onSubmit = (stepData) => {
    console.log('submited');
    setRegisterData({ ...registerData, ...stepData });
  };

  const onBack = (stepData) => {
    setCurrIndex(currIndex - 1);
  };

  return (
    <div className="h-screen flex justify-center">
      <RegisterOnboarding
        onFinish={() => {
          console.log("registerData : ", registerData);
          console.log("photo : ", registerData.photo);
        }}
        currIndex={currIndex}
        onNext={onNext}
        onBack={onBack}
        onSubmit={onSubmit}
      >
        <RegisterRole />
        <RegisterForm />
        {registerData.role === "professional" && <RegisterJob />}
        {registerData.role === "professional" && <RegisterExperience />}
        {registerData.role === "professional" && <RegisterEducation />}
      </RegisterOnboarding>
    </div>
  );
};

export default Register;
