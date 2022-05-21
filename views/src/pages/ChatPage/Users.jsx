import { connect } from "react-redux";

const Users = ({ user, setMessenger }) => {
  return (
    <div>

    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Users);
