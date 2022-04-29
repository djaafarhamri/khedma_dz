import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterOnboarding = ({ children, onFinish, currIndex, onNext, onBack }) => {
  const nav = useNavigate()
  const goToNext = (stepData) => {
    onNext(stepData);
  };

  const currChild = React.Children.toArray(children)[currIndex];
  if (React.isValidElement(currChild)) {
    return React.cloneElement(currChild, { goToNext, onBack });
  }

  return (
    <div>
      <button
        onClick={() => {
          onFinish();
          nav("/");
        }}
      >
        submit
      </button>
    </div>
  );
};

export default RegisterOnboarding;
