import { useParams } from "react-router";
import { useDataSource } from "../../hooks/useDataSource";

const Profile = () => {
  const { _id } = useParams();
  const user = useDataSource(`http://localhost:4000/get_user/${_id}`).data.user;

  return user ? (
    <div className="flex">Not found</div>
  ) : (
    <div className="profile bg-gray-200 font-inter max-h-screen text-dark-blue ">
      <div className="grid">{user}</div>
    </div>
  );
};

export default Profile;
