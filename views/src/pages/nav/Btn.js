import { Stack } from "@mui/material";
import {React,useEffect} from "react";
import { Link } from "react-router-dom";

const Btn = () => {

    return ( 
        <div>
            <Stack direction="row" spacing={2}>
            <Link to="/Register"  className="" >
               <button className="btn">Sign up</button> 
            </Link>
            <Link to="/Login"  className="" >
               <button className="btn">Log in</button> 
            </Link>
            </Stack>
           
        
      
         
        </div>
     );
}
 
export default Btn;
