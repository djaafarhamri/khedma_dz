import {React,useState} from "react";
import { motion } from "framer-motion";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


const Search = () => {
    const [appear, appearance]=useState(false);
    const variants ={
        open:{opacity:1 ,   },
        closed:{opacity:0 , }
    }
    return ( 
    <div>
       {appear &&<motion.input 
         animate={appear ? "open" : "closed"}
        variants={variants}
        className="absolute  z-10  h-7 w-48 border-b-2 outline-none"
        placeholder="Search..."/>}
<motion.button
        onClick={()=>appearance(appear=>!appear)}
        whileHover={ {scale:1.1} }
        whileTap={ {scale:0.9} }
        className=' z-10 relative ml-44'>
               {appear ? <CloseIcon/> : <SearchIcon fontSize="large"/>  } 
               
        </motion.button>     
    </div> );
}
 
export default Search;