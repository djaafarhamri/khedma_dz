import logo from "../assets/labour.jpeg";

const Navbar = () => {
  // #404679
  return (
    <div className="navbar h-16 border-solid border-b">
      <div className="flex max-w-[60%] justify-between mx-auto items-center">
        <img className="h-12 cursor-pointer " src={logo} alt="" />
        <div>
          <input
            className="h-10 w-80 rounded-2xl border-solid border"
            type="text"
            placeholder="   Search"
          />
          <button className="">Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
