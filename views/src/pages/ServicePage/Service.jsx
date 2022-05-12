import { useParams } from "react-router";
import { useDataSource } from "../../hooks/useDataSource";

const Service = () => {
  const { _id } = useParams();
  const service = useDataSource(`http://localhost:4000/get_service/${_id}`).data.service;

  return service ? (
    <div className="flex">Not found</div>
  ) : (
    <div className="profile bg-gray-200 font-inter max-h-screen text-dark-blue ">
      <div className="grid">{service}</div>
    </div>
  );
};

export default Service;
