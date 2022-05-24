
const ShowOfferModal = ({ setShowOffer, acceptOffer, offer }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Offer</h3>
              <button
                className="p-1 ml-auto  border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowOffer(false)}
              >
                <span className=" text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative flex-auto">
              <div className="flex  justify-center items-center ">
                <div className="flex-col justify-center space-y-4 bg-white py-3 px-6 lg:py-6 lg:px-12 ">
                  <div>
                    <label
                      for="exampleFormControlInput1"
                      className="form-label inline-block mb-2 text-dark-blue"
                    >
                      Price
                    </label>
                    <input
                      type="text"
                      className="input"
                      id="exampleFormControlInput1"
                      placeholder="Price"
                      value={offer?.price}
                      disabled
                    />
                  </div>

                  <div>
                    <label
                      for="exampleFormControlInput1"
                      className="form-label inline-block mb-2 text-dark-blue"
                    >
                      Due Date
                    </label>
                    <input
                      type="date"
                      className="input "
                      id="exampleFormControlInput1"
                      placeholder="Due Date"
                      value={offer?.dueDate}
                      disabled                    />
                  </div>

                  <div>
                    <label
                      for="exampleFormControlInput1"
                      className="form-label inline-block mb-2 text-dark-blue"
                    >
                      discreption
                    </label>
                    <textarea
                      type="text"
                      className="input"
                      id="exampleFormControlInput1"
                      placeholder="discreption"
                      value={offer?.descri}
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-dark-blue background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowOffer(false)}
              >
                Close
              </button>
              <button
                className="bg-green-cyan text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  acceptOffer(offer._id);
                  setShowOffer(false);
                }}
              >
                Accept Offer
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ShowOfferModal;
