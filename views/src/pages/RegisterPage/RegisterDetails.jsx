import { useState, useRef } from "react";
import OnboardingTrack from "./OnboardingTrack";
import addPhoto from "../../assets/307-avatar-icon-calm-plus.svg";

const RegisterDetails = ({ goToNext, onBack, submit, onSubmit }) => {
  const [photo, setPhoto] = useState();
  const [adress, setAdress] = useState();
  const [phone, setPhone] = useState();
  const inputRef = useRef(null);

  return (
    <>
      <div className="flex flex-col">
        <h2 className="lg:text-4xl font-bold text-xl mt-6">
          A few last details. then you're ready to go!
        </h2>
        <div className="flex justify-center mt-4">
          <input type="file" className="hidden" ref={inputRef} onChange={(e) => {
                setPhoto(e.target.files[0]);
              }} />
          <img className="w-32 h-32 mr-4 cursor-pointer" src={addPhoto} alt="" onClick={() => {
            inputRef.current.click();
          }} />
          <div className="mt-3">
            <div className="">
              <p>Phone*</p>
              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                className="p-2 border border-solid"
                type="text"
                placeholder=""
              />
            </div>

            <div className=" mt-6">
              <p>Adress*</p>
              <input
                onChange={(e) => {
                  setAdress(e.target.value);
                }}
                className="p-2 border border-solid"
                type="text"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
      <OnboardingTrack
        onBack={onBack}
        goToNext={goToNext}
        data={{ photo, adress, phone }}
        track="90%"
        buttonText="Publish Profile"
        onSubmit={onSubmit}
        submit={submit}
        isSubmit={true}
      />
    </>
  );
};

export default RegisterDetails;
