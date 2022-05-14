import { useParams } from "react-router";
import { useDataSource } from "../../hooks/useDataSource";
import { connect } from "react-redux";
import axios from "axios";

const Service = ({ user }) => {
  const { _id } = useParams();
  const service = useDataSource(`http://localhost:4000/get_service/${_id}`).data
    .service;
  const order = (id) => {
    axios
      .post(`http://localhost:4000/order`, { id, user_id: user._id })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return service ? (
    <div className="flex">Not found</div>
  ) : (
    <div className="profile bg-gray-200 font-inter max-h-screen text-dark-blue ">
      <div className="grid">{service}</div>
      <button onClick={() => {order(_id)}}>Buy</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Service);
