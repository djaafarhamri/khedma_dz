import { useNavigate, useParams } from "react-router";
import Carousel from "./Carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import Comment from "./Comment";
import { connect } from "react-redux";

const Profile = ({ user }) => {
  const { _id } = useParams();
  const [userF, setUser] = useState(null);
  const nav = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/get_user/${_id}`)
      .then((res) => {
        setUser(res.data);
        console.log(res.data.experience);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [_id]);
  const message = () => {
    axios
      .post("http://localhost:4000/newMessenger", {
        user: user?.user,
        messenger: userF._id,
      })
      .then((res) => {
        console.log(res.data);
        nav("/chat");
      });
  };

  return userF && userF.role === "professional" ? (
    <div className="profile bg-gray-200 font-inter h-full text-dark-blue mt-20 ">
      <div className="grid sm:grid-cols-12 gap-8  mx-5 mb-4 py-5">
        {/*userF info */}
        <div className=" col-span-12 md:col-span-3 bg-white p-3 rounded-md">
          <div className="flex flex-col space-y-3 ">
            <img
              src={`http://localhost:4000/${userF.profile_image}`}
              className="rounded-full h-full w-full object-cover"
              alt=""
            />
            <h1 className="text-2xl flex font-semibold justify-between">
              {userF.first_name} {userF.last_name}
              {userF._id !== user?.user && (
                <div
                  onClick={() => {
                    message();
                  }}
                  className="flex cursor-pointer items-center justify-center rounded-2xl text-dark-blue bg-indigo-100 h-10 w-10"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="blue"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-width="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    ></path>
                  </svg>
                </div>
              )}
            </h1>
            <h2 className="text-xl font-semibold text-left ">Age:</h2>
            <h2 className="text-xl font-semibold text-left text-gray-500">
              {/* {new Date().getFullYear() - userF.birth_date.getFullYear()} */}
              {new Date().getFullYear() - 2001}
            </h2>
            <h2 className="text-xl font-semibold text-left ">Location:</h2>
            <h2 className="text-xl font-semibold text-left text-gray-500">
              {userF.adress}
            </h2>
            <h2 className="text-xl font-semibold text-left ">profession:</h2>
            <h2 className="text-xl font-semibold text-left text-gray-500">
              {userF.job}
            </h2>
          </div>
        </div>
        {/*userF services and cv */}
        <div className="col-start-4 col-end-12">
          <div className="flex flex-col">
            <div className="bg-white text-xl py-4 px-6 font-medium rounded-lg">
              {userF.job_description}
            </div>
            {userF?.experience && (
              <div className="bg-white text-xl py-4 px-6 font-medium rounded-lg">
                Experiences
                {userF.experience.map((exp, i) => (
                  <div className="bg-white text-xl py-4 px-6 font-medium rounded-lg">
                    <h2 className="text-xl font-semibold text-left ">
                      {exp.company}
                    </h2>
                    <h2 className="text-xl font-semibold text-left text-gray-500">
                      {exp.title}
                    </h2>
                    <h2 className="text-xl font-semibold text-left ">
                      {exp.from} - {exp.current ? "Present" : exp.to}
                    </h2>
                    <h2 className="text-xl font-semibold text-left text-gray-500">
                      {exp.description}
                    </h2>
                  </div>
                ))}
              </div>
            )}
            {userF?.education && (
              <div className="bg-white text-xl py-4 px-6 font-medium rounded-lg">
                Educations
                {userF.education.map((exp, i) => (
                  <div className="bg-white text-xl py-4 px-6 font-medium rounded-lg">
                    <h2 className="text-xl font-semibold text-left ">
                      {exp.degree}
                    </h2>
                    <h2 className="text-xl font-semibold text-left text-gray-500">
                      {exp.school}
                    </h2>
                    <h2 className="text-xl font-semibold text-left text-gray-500">
                      {exp.fieldofstudy}
                    </h2>
                    <h2 className="text-xl font-semibold text-left ">
                      {exp.from} - {exp.current ? "Present" : exp.to}
                    </h2>
                  </div>
                ))}
              </div>
            )}

            <div>
              <Carousel _id={_id} />
            </div>
          </div>
        </div>
        <div className="col-span-full">
          <Comment _id={_id} />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex">Not found</div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Profile);
