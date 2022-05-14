
import img from "../../assets/O.jpg"
import { useParams } from "react-router";
import { useDataSource } from "../../hooks/useDataSource";

const Profile = () => {
  const { _id } = useParams();
  const user = useDataSource(`http://localhost:4000/get_user/${_id}`).data.user;

  return user ? (
    <div className="flex">Not found</div>
    ) : (
        <div className="profile bg-gray-200 font-inter max-h-screen text-dark-blue mt-20 ">
            <div className="grid sm:grid-cols-12 gap-8 mx-5 py-2">

                <div className=" sm:col-span-12 lg:col-span-3 bg-white p-3 rounded-md">
                    <img src={img} className="rounded-full h-full w-full object-cover" alt="" />
                </div>
                <div className="col-start-5 col-end-12">

                </div>
            </div>
        </div>
     );
};
 
export default Profile;






