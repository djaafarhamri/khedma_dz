import Filter from "./Filter";
import Card from "./Card";
import { useDataSource } from "../../hooks/useDataSource";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let title = searchParams.get("title")
  const services = useDataSource(`http://localhost:4000/get_services/${title}`).data.service;
  return (
    <div className="home bg-gray-100 font-inter h-screen pt-4 md:pt-8 mt-16">
        <h2 className="font-inter text-dark-blue font-extrabold text-2xl ml-5 mb-4 md:ml-8 ">Jobs & Talents</h2>
        <Filter/>
        <Card />
        {services?.map((service) => (
          <Card key={service._id} service={service} />
        ))}
    </div>
  );
};

export default Home;
