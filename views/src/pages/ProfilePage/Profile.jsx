import img from "../../assets/O.jpg";
import { useParams } from "react-router";
import Carousel from "./Carousel";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const { _id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/get_user/${_id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [_id]);

  return user ? (
    <div className="profile bg-gray-200 font-inter max-h-screen text-dark-blue mt-20 ">
      <div className="grid sm:grid-cols-12 gap-8 mx-5 py-5">
        {/*user info */}
        <div className=" col-span-12 md:col-span-3 bg-white p-3 rounded-md">
          <div className="flex flex-col space-y-3 ">
            <img
              src={`http://localhost:4000/${user.profile_image}`}
              className="rounded-full h-full w-full object-cover"
              alt=""
            />
            <h1 className="text-center text-2xl font-semibold">
              {user.first_name} {user.last_name}
            </h1>
            <h2 className="text-xl font-semibold text-left ">Age:</h2>
            <h2 className="text-xl font-semibold text-left text-gray-500">
              {/* {new Date().getFullYear() - user.date_of_birth.getFullYear()} */}
              {new Date().getFullYear() - 2001}
            </h2>
            <h2 className="text-xl font-semibold text-left ">Location:</h2>
            <h2 className="text-xl font-semibold text-left text-gray-500">
              {user.location}
            </h2>
            <h2 className="text-xl font-semibold text-left ">profession:</h2>
            <h2 className="text-xl font-semibold text-left text-gray-500">
              {user.job}
            </h2>
          </div>
        </div>
        {/*user services and cv */}
        <div className="col-start-4 col-end-12">
          <div className="flex flex-col">
            <div className="bg-white text-xl py-4 px-6 font-medium rounded-lg">
              {user.job_description}
            </div>
            <div>
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex">Not found</div>
  );
};

export default Profile;
