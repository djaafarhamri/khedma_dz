import Sidebar from "./Sidebar";
import Search from "./Search";
import Btn from "./Btn";

const Nav = () => {
  const isLogin =
    window.location.pathname.toLocaleLowerCase() === "/login" ||
    window.location.pathname.toLocaleLowerCase() === "/register";

  return (
    <>
      <div className="shadow ">
        <div className="flex mx-16 mt-4 mb-8 font-inter pb-2">
          <Sidebar />
          <div className="text-3xl text-dark-blue font-bold"> Khedma </div>
          <div
            className={`hidden basis-1/3 pt-2 ${
              isLogin ? "md:hidden" : "md:flex"
            }`}
          >
            <p className="pl-5 hover:text-green-cyan ease-in-out duration-500 text-lg cursor-pointer">
              Contact us
            </p>
            <p className="pl-5 hover:text-green-cyan ease-in-out duration-500 text-lg cursor-pointer">
              About us
            </p>
          </div>
          <div
            className={`hidden ${
              isLogin ? "md:hidden" : "md:flex"
            } basis-full justify-end`}
          >
            {!isLogin && <Search />}
            <Btn />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
