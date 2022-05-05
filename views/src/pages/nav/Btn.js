import { Stack, Divider } from "@mui/material";
import {React,useEffect} from "react";
import { Link } from "react-router-dom";

const Btn = () => {

    return ( 
        <div>
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
            
            <Link to="/Login"  className="" >
               <button className="btn">Log in</button> 
            </Link>
            <Link to="/Register"  className="" >
               <button className="btn">Sign up</button> 
            </Link>
            </Stack>
           
        
      
         
        </div>
     );
}
 
export default Btn;
