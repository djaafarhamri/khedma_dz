const RegisterStepOne = ({ goToNext }) => {
  return (
    <div>
      <h1>step one</h1>
      <button onClick={() => goToNext({ last: "hamri" })}>next</button>
    </div>
  );
};

export default RegisterStepOne;
