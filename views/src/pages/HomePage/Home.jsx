import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import axios from "axios";


const Home = () => {
  const [professionals, setProfessionals] = useState([]);
  const [name, setName] = useState();
  const [job, setJob] = useState();
  const [location, setLocation] = useState();
  const [min_price, setMinPrice] = useState();
  const [max_price, setMaxPrice] = useState();
  useEffect(() => {
    axios.post(`http://localhost:4000/get_professionals_with_filter`, {
      name,
      job,
      location,
      min_price,
      max_price,

    }).then((res) => {
      setProfessionals(res.data);
    });
  }, [name, job, location, min_price, max_price]);
    

  return (
    <div className="home bg-gray-100 font-inter h-screen pt-4 md:pt-8 mt-16">
        <h2 className="font-inter text-dark-blue font-extrabold text-2xl ml-5 mb-4 md:ml-8 ">Jobs & Talents</h2>
        
        <Modal setName={setName} setJob={setJob} setLocation={setLocation} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
        {professionals && professionals.map((professional) => (
          <Card professional={professional} />
        ))}
        
    </div>
  );
};

export default Home;
