import React from "react";

const RegisterOnboarding = ({ children, onFinish, currIndex, onNext }) => {
  const goToNext = (stepData) => {
    onNext(stepData);
  };

  const currChild = React.Children.toArray(children)[currIndex];
  if (React.isValidElement(currChild)) {
    return React.cloneElement(currChild, { goToNext });
  }

  return (
    <div>
      <button
        onClick={() => {
          onFinish();
        }}
      >
        submit
      </button>
    </div>
  );
};

export default RegisterOnboarding;
