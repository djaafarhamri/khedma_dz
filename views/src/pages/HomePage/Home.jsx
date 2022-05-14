import Filter from "./Filter";
import Card from "./Card";

const Home = () => {

  return (
    <div className="home bg-gray-100 font-inter h-screen pt-4 md:pt-8 mt-16">
        <h2 className="font-inter text-dark-blue font-extrabold text-2xl ml-5 mb-4 md:ml-8 ">Jobs & Talents</h2>
        <Filter/>
        <Card/>
    </div>
  );
};

export default Home;
