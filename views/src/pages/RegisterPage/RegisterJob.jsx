import { useState } from "react";
import OnboardingTrack from "./OnboardingTrack";

const RegisterJob = ({ goToNext, onBack }) => {
  const [job, setJob] = useState("");
  const [jobDescr, setJobDescr] = useState("");

  return (
    <>
      <div className="flex flex-col mt-16">
        <h2 className="lg:text-4xl font-bold text-xl text-dark-blue mt-10">
          Got it. Now, add a title and a description to tell
          <br /> the world what you do.
        </h2>
        <p className="mt-6 text-gray-500">
          It’s the very first thing clients see, so make it count. Stand out by
          describing your expertise
          <br /> in your own words.
        </p>
        <input
          onChange={(e) => {
            setJob(e.target.value);
          }}
          className="mt-6 px-6 py-2 border border-solid"
          type="text"
          placeholder="e.g. Plombier"
        />
        <textarea
          onChange={(e) => {
            setJobDescr(e.target.value);
          }}
          className="mt-6 px-6 py-2 border border-solid"
          placeholder="e.g. I'm a plombier, I fix plumbing issues."
        />
      </div>
      <OnboardingTrack
        onBack={onBack}
        goToNext={goToNext}
        data={{ job, job_description: jobDescr }}
        track="15%"
        buttonText="Next, Add experiance"
      />
    </>
  );
};

export default RegisterJob;
