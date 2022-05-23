
/*const Modal = ({ setModalOn, setChoice }) => {
    const handleOKClick = () => {
        setChoice(true)
        setModalOn(false)
const Modal = ({ setModalOn, setChoice }) => {
  const nearest = (lat1, lon1, lat2, lon2, unit = "K") => {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === "K") {
      dist = dist * 1.609344;
    }
    if (unit === "N") {
      dist = dist * 0.8684;
    }
    return dist <= 1 ? true : false;
  };
  const handleOKClick = () => {
    setChoice(true);
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };
  return (
    <div className="   bg-amber-50 opacity-80 fixed inset-0 z-40  ">
      <div className="flex h-screen justify-center items-center ">
        <div className="flex-col justify-center  bg-white py-12 px-24 border-4 border-dark-blue rounded-xl ">
          <div class="relative mb-2">
            <input
              id="email"
              name="email"
              type="text"
              class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-green-cyan"
              placeholder="."
            />
            <label
              for="email"
              class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Email address
            </label>
          </div>

          <div className="flex">
            <button
              onClick={handleOKClick}
              className=" rounded px-4 py-2 text-white  bg-green-cyan "
            >
              Select
            </button>
            <button
              onClick={handleCancelClick}
              className="rounded px-4 py-2 ml-4 text-white bg-green-cyan "
            >
              Cancel
            </button>
          </div>
        </div>
        </div>
     );
}
 
export default Modal;*/
import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className=" text-dark-blue  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline outline-1  ml-7 mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Filter
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Filter
                  </h3>
                  <button
                    className="p-1 ml-auto  border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <div className="flex  justify-center items-center ">
                <div className="flex-col justify-center space-y-4 bg-white py-6 px-12 lg:py-12 lg:px-24 ">
                  <div>
                  <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-dark-blue">Name</label>
                 <input
                  type="text"
                  class="input"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                  />
                  </div>
                  
                  <div>
                  <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-dark-blue">Location</label>
                 <input
                  type="text"
                  class="input "
                  id="exampleFormControlInput1"
                  placeholder="Location"
                  />
                  </div>

                  <div>
                  <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-dark-blue">Job</label>
                 <input
                  type="text"
                  class="input"
                  id="exampleFormControlInput1"
                  placeholder="Job"
                  />
                  </div>
                  <h1 className="text-dark-blue font-semibold text-xl ">price</h1>
                  <div className="flex">
                  <div>
                  <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-dark-blue">Minimum</label>
                 <input
                  type="text"
                  class="input"
                  id="exampleFormControlInput1"
                  placeholder="Min-Price"
                  />
                  </div>
                  <div>
                  <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-dark-blue">Maximum</label>
                 <input
                  type="text"
                  class="input"
                  id="exampleFormControlInput1"
                  placeholder="Max-Price"
                  />
                  </div>
                  </div>
                  
                </div>
                
                </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-dark-blue background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-cyan text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
