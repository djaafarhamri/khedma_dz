import logo from "../assets/labour.jpeg";

const Navbar = () => {
  return (
    <div className="navbar flex h-16 border-solid border justify-between items-center mx-32">
      <img className="h-12 cursor-pointer" src={logo} alt="" />
      <div>
        <input className="h-10 w-80 rounded-2xl border-solid border" type="text" placeholder="   Search" />
        <button className="">Log In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
