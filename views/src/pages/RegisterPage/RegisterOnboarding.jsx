import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterDetails from "./RegisterDetails";

const RegisterOnboarding = ({ children, onFinish, currIndex, onNext, onBack, onSubmit }) => {
  const goToNext = (stepData) => {
    onNext(stepData);
  };

  const currChild = React.Children.toArray(children)[currIndex];
  if (React.isValidElement(currChild)) {
    return React.cloneElement(currChild, { goToNext, onBack });
  }

  return (
    <div>
      <RegisterDetails submit={onFinish} onSubmit={onSubmit} />
    </div>
  );
};

export default RegisterOnboarding;
