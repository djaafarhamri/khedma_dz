import axios from "axios";
import { useEffect, useState } from "react";

const User = ({ key, user, setMessengerChat }) => {
  const [messenger, setMessenger] = useState();
  useEffect(() => {
    console.log(user);
    axios
      .get(`http://localhost:4000/get_user/${user}`)
      .then((res) => {
        setMessenger(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  return (
    <button
      key={key}
      className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
    >
      <img
        className="h-8 w-8 rounded-full"
        alt=""
        src={`http://localhost:4000/${messenger?.profile_image}`}
      />
      <div className="ml-2 text-sm font-semibold">
        {messenger?.first_name} {messenger?.last_name}
      </div>
    </button>
  );
};

export default User;
