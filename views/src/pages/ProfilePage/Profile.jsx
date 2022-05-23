
import img from "../../assets/O.jpg"
import { useParams } from "react-router";
import { useDataSource } from "../../hooks/useDataSource";
import Carousel from "./Carousel";
import Comment from "./Comment";

const Profile = () => {
  const { _id } = useParams();
  const user = useDataSource(`http://localhost:4000/get_user/${_id}`).data.user;

  return user ? (
    <div className="flex">Not found</div>
    ) : (
        <div className="profile bg-gray-200 font-inter h-full text-dark-blue mt-20 ">
            <div className="grid sm:grid-cols-12 gap-8  mx-5 mb-4 py-5">
                {/*user info */}
                <div className=" col-span-12 md:col-span-3 bg-white p-3 rounded-md">
                    <div className="flex flex-col space-y-3 ">
                      <img src={img} className="rounded-full h-full w-full object-cover" alt="" />
                      <h1 className="text-center text-2xl font-semibold">Ahmed yacine</h1>
                      <h2 className="text-xl font-semibold text-left ">Age:</h2>
                      <h2 className="text-xl font-semibold text-left text-gray-500">20</h2>
                      <h2 className="text-xl font-semibold text-left ">Location:</h2>
                      <h2 className="text-xl font-semibold text-left text-gray-500">saida algeria</h2>
                      <h2 className="text-xl font-semibold text-left ">profession:</h2>
                      <h2 className="text-xl font-semibold text-left text-gray-500">programer</h2>
                    </div>
                </div>
                {/*user services and cv */}
                <div className="col-start-4 col-end-12">
                    <div className="flex flex-col">
                        <div className="bg-white text-xl py-4 px-6 font-medium rounded-lg">
                        A Medical Biller is a medical professional responsible for
                         managing the administrative responsibilities of billing insurance 
                         and processing payments for clients. In addition,
                         they communicate with patients about outstanding balancescollecting
                          on behalf of their employer or provider institution as necessary to 
                          ensure the patient’s procedures are paid for by their insurance company
                        </div>
                        <div>
                            <Carousel/>
                        </div>
                        
                    </div>
                </div>
                <div className="col-span-full">
                            <Comment/>
                        </div>
            </div>
        </div>
     );
};
 
export default Profile;






