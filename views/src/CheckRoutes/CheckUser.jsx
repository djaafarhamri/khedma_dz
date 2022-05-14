import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { checkUser } from "../stores/userStore/userThunk";

const CheckUser = ({ children, onLoad }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onLoad(setIsLoading);
  }, [onLoad]);

  return isLoading ? <div>isLoading</div> : children;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (setIsLoading) => {
      dispatch(checkUser(setIsLoading));
    },
  };
};

export default connect(null, mapDispatchToProps)(CheckUser);
