import {React,useState} from "react";
import { motion } from "framer-motion";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


const Search = () => {
    const [appear, appearance]=useState(false);
    const variants ={
        open:{opacity:1 ,   },
        closed:{opacity:0 , x:"-100%"}
    }
    return ( 
    <div>
       <motion.input 
         animate={appear ? "open" : "closed"}
        variants={variants}
        className="absolute  z-10 rounded-xl h-7"/>
<motion.button
        onClick={()=>appearance(appear=>!appear)}
        whileHover={ {scale:1.1} }
        whileTap={ {scale:0.9} }
        className=' z-20 relative ml-6'>
               {appear ? <CloseIcon/> : <SearchIcon/>  } 
               
        </motion.button>     
    </div> );
}
 
export default Search;