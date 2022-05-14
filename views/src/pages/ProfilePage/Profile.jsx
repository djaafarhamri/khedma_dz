import img from "../../assets/O.jpg"

const Profile = () => {
    return ( 
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
}
 
export default Profile;