import { useState } from "react";

const Rating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
      <div >
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className='bg-transparent border-none outline-none cursor-pointer'
              
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className={index <= (hover || rating) ? "bg-yellow-400" : "bg-white"}>&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };
export default Rating;