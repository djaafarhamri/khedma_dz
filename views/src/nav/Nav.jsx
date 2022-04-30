import { useState } from "react";
import Sidebar from "./Sidebar";

const Nav = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
    <div className="shadow ">
     <div className='flex  mx-16 mt-4 mb-8 font-inter pb-2'>
       <Sidebar/>
       <div className='text-3xl text-dark-blue font-bold'> Khedma </div>
       <div className='flex basis-2/3 pt-2 '>
         <p className='pl-5 hover:text-green-cyan ease-in-out duration-500 text-lg'>Contact us</p>
        <p className='pl-5 hover:text-green-cyan ease-in-out duration-500 text-lg'>About us</p>
       </div>
     </div>
     </div>
    </>
  );
};

export default Nav;