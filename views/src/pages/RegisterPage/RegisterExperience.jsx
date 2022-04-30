import { useState } from "react";
import AddExperience from "./AddExperience";
import OnboardingTrack from "./OnboardingTrack";
import addIcon from "../../assets/49-plus-circle.svg";
import jobIcon from "../../assets/1023-portfolio.svg";
import EditExperience from "./EditExperience";

const RegisterExperience = ({ goToNext, onBack }) => {
  const [experiences, setExperiences] = useState([]);
  const [experience, setExperience] = useState({});
  const [showAddExperience, setShowAddExperience] = useState(false);
  const [showEditExperience, setShowEditExperience] = useState(false);

  return (
    <>
      <div className="w-screen">
        <h2 className="ml-32 lg:text-4xl font-bold text-xl mt-10">
          Great way to get clients is by your experience
        </h2>
        <div className="flex flex-wrap self-start ml-32 pb-32">
          {experiences.map((e, index) => (
            <div
              className="relative flex mr-10 mt-8 w-[400px] h-64 border border-solid"
              key={index}
            >
              <img className="w-16 h-16 mt-6 ml-2" src={jobIcon} alt="" />
              <div className="flex flex-col pt-6 pl-6 pr-2">
                <h3 className="text-xl font-bold">{e.title}</h3>
                <p className="text-sm mt-4 ">{e.company}</p>
                <p className="text-sm">{e.location}</p>
                <p className="text-sm">
                  {e.from} -{" "}
                  {e.current ? "Present" : e.to}
                </p>
                <p className="text-sm mt-4">{e.description}</p>
              </div>
              <div className="ml-auto">
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    setExperiences(
                      experiences.filter(
                        (exp) => exp.title !== e.title
                      )
                    );
                  }}
                >
                  Delete
                </button>
                {/* edit */}
                <button
                  className=""
                  onClick={() => {
                    setExperience(e);
                    setShowEditExperience(true);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}

          <div
            className="mt-8 mr-10 w-64 h-64 cursor-pointer hover:bg-[#ebf4fb] border border-dashed flex justify-center items-center"
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
      {showEditExperience && (
        <EditExperience
          experiences={experiences}
          setExperiences={setExperiences}
          setShowEditExperience={setShowEditExperience}
          experienceToedit={experience}
        />
      )}
    </>
  );
};

export default RegisterExperience;
