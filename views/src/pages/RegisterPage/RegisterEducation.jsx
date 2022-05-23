import { useState } from "react";
import AddModal from "../sharedComponents/AddModal";
import OnboardingTrack from "./OnboardingTrack";
import addIcon from "../../assets/49-plus-circle.svg";
import jobIcon from "../../assets/1023-portfolio.svg";
import EditModal from "../sharedComponents/EditModal";

const RegisterEducation = ({ goToNext, onBack }) => {
  const [educations, setEducations] = useState([]);
  const [education, setEducation] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <>
      <div className="w-screen mt-16">
        <h2 className="ml-32 lg:text-4xl text-dark-blue font-bold text-xl mt-10">
          Great way to get clients is by your education
        </h2>
        <div className="flex flex-wrap self-start ml-32 pb-32">
          {educations.map((e, index) => (
            <div
              className="relative flex mr-10 mt-8 w-[400px] h-64 border border-solid"
              key={index}
            >
              <img className="w-16 h-16 mt-6 ml-2" src={jobIcon} alt="" />
              <div className="flex flex-col pt-6 pl-6 pr-2">
                <h3 className="text-xl font-bold">{e.degree}</h3>
                <p className="text-sm mt-4 ">{e.school}</p>
                <p className="text-sm mt-4 ">{e.fieldofstudy}</p>
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
                    setEducations(
                      educations.filter(
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
                    setEducation(e);
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
            <img src={addIcon} alt="education" className="w-[20%] h-[20%]" />
          </div>
        </div>
      </div>
      <OnboardingTrack
        onBack={onBack}
        goToNext={goToNext}
        data={{ educations }}
        track="55%"
        buttonText="Next, Add a Category"
      />
      {showAddModal && (
        <AddModal
          id="education"
          datas={educations}
          setDatas={setEducations}
          setShowAddModal={setShowAddModal}
          />
          )}
      {showEditModal && (
          <EditModal
          id="education"
          datas={educations}
          setDatas={setEducations}
          setShowEditModal={setShowEditModal}
          dataToedit={education}
        />
      )}
    </>
  );
};

export default RegisterEducation;
