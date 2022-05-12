import { useDataSource } from "../../hooks/useDataSource";
import User from "./User";

const Users = () => {
  const users = useDataSource(`http://localhost:4000/get_users`).data.users;
  return (
    <div>
      <input type="text" placeholder="searsh" />
      {users?.map((user, key) => (
        <User key={key} user={user} />
      ))}
    </div>
  );
};

export default Users;
