import { useNavigate, useParams } from "react-router";
import { connect } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

const Service = ({ user }) => {
  const { _id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:4000/get_service/${_id}`)
      .then((res) => {
        console.log(res.data);
        setService(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [_id]);

  const nav = useNavigate();
  const buy = () => {
    axios
      .post("http://localhost:4000/newMessage", {
        user: user.user,
        messenger: service.created_by,
      })
      .then((res) => {
        console.log(res.data);
        nav("/");
      });
  };

  return (
    <div className="profile bg-gray-200 font-inter max-h-screen text-dark-blue ">
      <div className="flex">{JSON.stringify(service)}</div>
      <button
        onClick={() => {
          buy();
        }}
      >
        Buy
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Service);
