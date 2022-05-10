import { Button  } from "@material-ui/core";
import {  useState } from "react";
import Modal from "./Modal";

const Filter = () => {
    const [modalOn, setModalOn] = useState(false);
    const [choice, setChoice] = useState(false)
  
    const clicked = () => {
      setModalOn(true)
    }

    return ( 

    <div>
        <Button onClick={clicked} variant="outlined" className="ml-5 md:ml-8 "><p className="font-inter text-dark-blue">Filter</p> <svg className="w-6 h-6 " fill="none" stroke="#0c1232" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg></Button>
        {modalOn && < Modal setModalOn={setModalOn} setChoice={setChoice} />}
              
     </div>
     );
}
 
export default Filter;