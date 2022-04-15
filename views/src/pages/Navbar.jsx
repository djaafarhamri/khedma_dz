import logo from '../assets/labour.jpeg'

const Navbar = () => {
    return ( 
        <div className="navbar flex h-16 border-solid border center">
            <img className='h-12' src={logo} alt="" />
            <input className='h-8' type="text" placeholder='   Search' />
            <button>Log In</button>
            <button>Sign Up</button>
        </div>
     );
}
 
export default Navbar;