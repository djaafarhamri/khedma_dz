import { useState } from "react";
import { connect } from "react-redux";
import { addService } from "../../stores/userStore/userThunk";

const AddService = ({ user, onAddService, setShowAddService }) => {
  const [data, setData] = useState({});
  const [cover, setCover] = useState(null); 

  return (
    <>
      <div
        onClick={() => {
          setShowAddService(false);
        }}
        className="fixed w-screen h-screen top-[0px] left-[0px] bg-[#000]/[.5]"
      ></div>

      <div className="fixed w-[500px] h-[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff] overflow-y-scroll">
        <div className="sticky top-[0px] bg-[#fff] pl-10 py-4 shadow-[0_4px_2px_-2px_rgba(0,0,0,0.2)]">
          <h1 className="font-bold text-xl">Add Service</h1>
        </div>
        <div className="flex flex-col ml-10">
          <div className="mb-5">
            <p>Cover*</p>
            <input
              className="w-[80%] p-2 border border-solid"
              type="file"
              onChange={(e) => {
                setCover(e.target.files[0]);
              }}
            />
          </div>

          <div className="mb-5">
            <p>Title*</p>
            <input
              className="w-[80%] p-2 border border-solid"
              type="text"
              placeholder="ex. Website Development"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
            />
          </div>

          <div className="mb-5">
            <p>Duration*</p>
            <input
              className="w-[80%] p-2 border border-solid"
              type="text"
              placeholder="ex. 3 months"
              onChange={(e) => {
                setData({ ...data, duration: e.target.value });
              }}
            />
          </div>

          <div className="mb-5">
            <p>Category*</p>
            <input
              className="w-[80%] p-2 border border-solid"
              type="text"
              placeholder="ex. Web Development"
              onChange={(e) => {
                setData({ ...data, category: e.target.value });
              }}
            />
          </div>

          <div className="mb-5">
            <p>Price*</p>
            <input
              className="w-[80%] p-2 border border-solid"
              type="number"
              placeholder="ex. 6000 DA"
              onChange={(e) => {
                setData({ ...data, price: e.target.value });
              }}
            />
          </div>

          <div className="mb-5">
            <p>Description</p>
            <textarea
              className="w-[80%] p-2 border border-solid"
              placeholder="ex. website development service"
              onChange={(e) => {
                setData({ ...data, description: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="flex justify-end sticky bottom-[0px] bg-[#fff] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.2)]">
          <button
            className="rounded-lg border border-solid border-[#14a800] text-[#fff] bg-[#14a800] m-2 p-2 w-48 font-bold"
            onClick={() => {
              onAddService({ ...data, user: user.user }, cover);
              setShowAddService(false);
            }}
          >
            Add Service
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddService: (data, cover) => {
      dispatch(addService(data, cover));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddService);
