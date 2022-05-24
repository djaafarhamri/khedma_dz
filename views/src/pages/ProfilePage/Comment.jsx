import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Rating from "./Rating";

const Comment = ({ user, _id }) => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4000/get_user/${_id}`).then((res) => {
      setReviews(res.data.reviews);
    });
  }, [_id]);

  const postComment = async () => {
    await axios.post(`http://localhost:4000/post_comment`, {
      _id,
      user: user?.user,
      comment,
      rating,
  })
      .then((res) => {
        setReviews([...reviews, res.data.review]);
      })
      .catch((err) => {
        console.log(err);
      });
    setComment("");
    setRating(0);
  };

  return (
    <div className="w-full shadow-md bg-white rounded-md">
      <div className="flex flex-col divide-y divide-gray-300">
        {user?.user !== _id && (
          <form action="" className="w-full p-4">
            <div className="mb-2">
              <label for="comment" className="text-lg text-gray-600">
                Add a comment
              </label>
              <textarea
                className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                name="comment"
                placeholder=""
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            <div className="flex space-x-2">
              <button onClick={postComment} className="px-3 py-2 text-sm text-blue-100 bg-green-cyan rounded">
                Comment
              </button>
              <Rating rating={rating} setRating={setRating} />
            </div>
          </form>
        )}

        <div>
          {reviews.map((review) => (
            <div className="my-2 mx-1 max-w-lg flex gap-3 rounded-md bg-white p-2 text-black shadow">
              <div className="mt-2">
                <img
                  className="w-56 rounded-full shadow"
                  src={`http://localhost:4000/${review.profile_image}`}
                  alt=""
                  srcset=""
                />
              </div>

              <div>
                <div className="flex items-center justify-between py-1 pr-2">
                  <div>
                    <a href="#" className="text-dark-blue hover:underline">
                      {review.first_name} {review.last_name}
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center gap-1">
                      <svg
                        className="inline-block h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>{" "}
                      {review.rating}
                    </div>
                  </div>
                </div>

                <div className="p-1">
                  <p className="text-gray-900 border-l-2 px-1 border-green-cyan bg-gray-100 rounded">
                    {review.comment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Comment);
