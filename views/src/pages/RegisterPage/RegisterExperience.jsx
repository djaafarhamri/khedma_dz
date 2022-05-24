import { useState } from "react";
import AddModal from "../sharedComponents/AddModal";
import OnboardingTrack from "./OnboardingTrack";
import addIcon from "../../assets/49-plus-circle.svg";
import jobIcon from "../../assets/1023-portfolio.svg";
import EditModal from "../sharedComponents/EditModal";

const RegisterExperience = ({ goToNext, onBack }) => {
  const [experiences, setExperiences] = useState([]);
  const [experience, setExperience] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <>
      <div className="w-screen mt-16">
        <h2 className="ml-32 lg:text-4xl text-dark-blue font-bold text-xl mt-10">
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
                        (exp) => exp.id !== e.id
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
                    setShowEditModal(true);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}

          <div
            className="mt-8 mr-10 w-64 h-64 cursor-pointer hover:bg-[#ebf4fb] border border-dashed flex justify-center items-center"
            onClick={() => setShowAddModal(true)}
          >
            <img src={addIcon} alt="experience" className="w-[20%] h-[20%]" />
          </div>
        </div>
      </div>
      <OnboardingTrack
        onBack={onBack}
        goToNext={goToNext}
        data={{ experience: experiences }}
        track="40%"
        buttonText="Next, Add education"
      />
      {showAddModal && (
        <AddModal
          datas={experiences}
          setDatas={setExperiences}
          setShowAddModal={setShowAddModal}
        />
      )}
      {showEditModal && (
        <EditModal
          datas={experiences}
          setDatas={setExperiences}
          setShowEditModal={setShowEditModal}
          dataToedit={experience}
        />
      )}
    </>
  );
};

export default RegisterExperience;
