import { useState } from "react";
import RegisterEducation from "./RegisterEducation";
import RegisterExperience from "./RegisterExperience";
import RegisterForm from "./RegisterForm";
import RegisterJob from "./RegisterJob";
import RegisterOnboarding from "./RegisterOnboarding";
import RegisterRole from "./RegisterRole";
import { register } from "../../stores/userStore/userThunk";
import { connect } from 'react-redux'
import { useNavigate } from "react-router";

const Register = ({signUp}) => {
  const [registerData, setRegisterData] = useState({});
  const [currIndex, setCurrIndex] = useState(0);
  const nav = useNavigate();

  const onNext = (stepData) => {
    setRegisterData({ ...registerData, ...stepData });
    setCurrIndex(currIndex + 1);
  };

  const onSubmit = (stepData) => {
    signUp({...registerData, ...stepData}, (cb) => {
      cb ? nav('/') : alert('error');
    }
    )
  };

  const onBack = () => {
    setCurrIndex(currIndex - 1);
  };

  return (
    <div className="h-screen flex justify-center">
      <RegisterOnboarding
        onFinish={() => {
          console.log("registerData : ", registerData);
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

const mapStateToProps = state => ({
  user: state.user
})


const mapDispatchToProps = dispatch => ({
  signUp: (data, cb) => dispatch(register(data, cb))
})





export default connect(mapStateToProps, mapDispatchToProps)(Register);
