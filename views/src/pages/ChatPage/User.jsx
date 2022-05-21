const User = ({ key, user }) => {
  return (
    <div key={key} className="flex p-2 hover:bg-gray-100 cursor-pointer">
      <img
        src={`http://localhost:4000/${user.profile_image}`}
        alt=""
        className="w-10 h-10 mx-2"
      />
      <h2 className="text-gray-600 font-semibold mx-1">{user.first_name}</h2>
      <h2 className="text-gray-600 font-semibold mx-1">{user.last_name}</h2>
    </div>
  );
};

export default User;
