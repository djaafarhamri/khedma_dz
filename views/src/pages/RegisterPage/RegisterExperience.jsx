import { useState } from "react";
import AddExperience from "./AddExperience";
import OnboardingTrack from "./OnboardingTrack";
import addIcon from "../../assets/49-plus-circle.svg";

const RegisterExperience = ({ goToNext, onBack }) => {
  const [experiences, setExperiences] = useState([]);
  const [showAddExperience, setShowAddExperience] = useState(false);
  return (
    <>
      <div className="w-screen">
        <h2 className="ml-32 lg:text-4xl font-bold text-xl mt-10">
          Great way to get clients is by your experience
        </h2>
        <div className="flex flex-wrap self-start ml-32 pb-32">
          {experiences.map((experience, index) => (
            <div className="m-8 w-64 h-80 cursor-pointer hover:bg-[#ebf4fb] border border-solid flex justify-center items-center" key={index}>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <p className="text-sm">{experience.description}</p>
                <p className="text-sm">{experience.company}</p>
                <p className="text-sm">{experience.location}</p>
                <p className="text-sm">
                  {experience.from} -{" "}
                  {experience.current ? "Present" : experience.to}
                </p>
              </div>
            </div>
          ))}

      
          <div
            className="m-8 w-64 h-80 cursor-pointer hover:bg-[#ebf4fb] border border-solid flex justify-center items-center"
            onClick={() => setShowAddExperience(true)}
          >
            <img src={addIcon} alt="experience" className="w-[20%] h-[20%]" />
          </div>
        </div>
      </div>
      <OnboardingTrack
        onBack={onBack}
        goToNext={goToNext}
        data={{ experiences }}
        track="40%"
        buttonText="Next, Add education"
      />
      {showAddExperience && (
        <AddExperience
          experiences={experiences}
          setExperiences={setExperiences}
          setShowAddExperience={setShowAddExperience}
        />
      )}
    </>
  );
};

export default RegisterExperience;
