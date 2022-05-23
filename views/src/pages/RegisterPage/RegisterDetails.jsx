import { useState, useRef } from "react";
import OnboardingTrack from "./OnboardingTrack";
import addPhoto from "../../assets/307-avatar-icon-calm-plus.svg";

const RegisterDetails = ({ goToNext, onBack, submit, onSubmit }) => {
  const [photo, setPhoto] = useState();
  const [adress, setAdress] = useState();
  const [phone, setPhone] = useState();
  const [date_of_birth, setDateOdBirth] = useState();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const inputRef = useRef(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      }, () => {
        alert('Unable to retrieve your location');
      });
    }
  }

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

            <div className=" mt-6">
              <p>Date Of Birth*</p>
              <input
                onChange={(e) => {
                  setDateOdBirth(e.target.value);
                }}
                className="p-2 border border-solid"
                type="text"
                placeholder=""
              />
            </div>
            
            <div className=" mt-6">
              <p>Localisation*</p>
              <input
                value={lat}
                className="p-2 border border-solid"
                type="text"
                placeholder="longitude,latitude"
                readOnly
                />
              <input
                value={lon}
                className="p-2 border border-solid"
                type="text"
                placeholder="longitude,latitude"
                readOnly
                />
                <button onClick={getLocation}>Get Localisation</button>
            </div>
          </div>
        </div>
      </div>
      <OnboardingTrack
        onBack={onBack}
        goToNext={goToNext}
        data={{ photo, adress, phone, location: { lat, lon }, date_of_birth }}
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
