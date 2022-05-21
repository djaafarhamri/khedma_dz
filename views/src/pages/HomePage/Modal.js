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
    </div>
  );
};

export default Modal;
