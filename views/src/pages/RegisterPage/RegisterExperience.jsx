import { useState } from "react";
import AddExperience from "./AddExperience";
import OnboardingTrack from "./OnboardingTrack";
import addIcon from '../../assets/49-plus-circle.svg'

const RegisterExperience = ({ goToNext, onBack }) => {
  const [experiences, setExperiences] = useState([]);
  const [showAddExperience, setShowAddExperience] = useState(false);
  return (
    <>
      <div>
        <h2>RegisterExperience</h2>
        <div className="w-64 h-64 cursor-pointer hover:bg-[#ebf4fb] border border-solid flex justify-center items-center" onClick={() => setShowAddExperience(true)}>
          <img
            src={addIcon}
            alt="experience"
            className="w-[20%] h-[20%]"
          />
        </div>
        
      </div>
      <OnboardingTrack
        onBack={onBack}
        goToNext={goToNext}
        data={{ experiences }}
        track="40%"
        buttonText="Next, Add education"
      />
      {showAddExperience && <AddExperience experiences={experiences} setExperiences={setExperiences} setShowAddExperience={setShowAddExperience} />}
    </>
  );
};

export default RegisterExperience;
