import { useDataSource } from "../../hooks/useDataSource";
import User from "./User";
import { connect } from "react-redux";

const Users = ({ user, setMessenger }) => {
  const users = useDataSource(`http://localhost:4000/get_users/:${user}`).data
    .users;
  return (
    <div>
      <input type="text" placeholder="searsh" />
      {users?.map((u, key) => (
        <div onClick={() => {setMessenger(u)}}>
          <User key={key} user={u} />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Users);
