import { connect } from "react-redux";

const Users = ({ user, setMessenger }) => {
  return (
    <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
      <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
        H
      </div>
      <div className="ml-2 text-sm font-semibold">Henry Boyd</div>
    </button>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Users);
