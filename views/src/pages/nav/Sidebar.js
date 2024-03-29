import React , {useState} from 'react'
import {motion} from 'framer-motion'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@mui/icons-material/Search';


const variants ={
    open:{opacity:1 , x:0 , },
    closed:{opacity:0 , x:"-100%"}
}

const Sidebar = () => {
    const [show,setshow]= useState(false)
    return ( 
        <div className='font-inter md:hidden tracking-normal'>
        <motion.nav 
        animate={show ? "open" : "closed"}
        variants={variants}
        transition={{duration: 0.5}}
        className='w-72 fixed top-0 left-0 bottom-0 z-20' 
        >
            <motion.div className='absolute top-0 left-0 bottom-0 w-full bg-white'>
                <ul className='ul-nav'>
                    <li className='flex basis-full justify-center mb-5'>
                    <SearchIcon fontSize='medium ' className=' self-end '/>
                        <input type="text" placeholder='Search...'
                        className='outline-none border-b-2 w-11/12 focus:border-green-cyan focus:text-dark-blue text-xl '  />
                    </li>
                    <li className='li-nav '>
                        <a href="Home" className='li-a'>Home</a>
 
                    </li>
                    <li className='li-nav'>
                    <a href="about us" className='li-a'>About us</a>
                    </li>
                </ul>
            </motion.div>

        </motion.nav>
        <motion.button
        onClick={()=>setshow(show=>!show)}
        whileHover={ {scale:1.1} }
        whileTap={ {scale:0.9} }
        className=' z-20 fixed border-none outline-0 top-4 lef left-4 w-12 h-10 rounded-xl'>
               {show ? <CloseIcon/> : <MenuIcon/>  } 
        </motion.button>
        </div>
     );
}
 
export default Sidebar;