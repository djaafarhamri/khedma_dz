import { useState } from "react";

const AddExperience = ({experiences, setExperiences, setShowAddExperience}) => {
  const [experience, setExperience] = useState({});
    
    return ( 
        <div>
        <h2>RegisterExperience</h2>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setExperience({ ...experience, title: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => {
            setExperience({ ...experience, description: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Company"
          onChange={(e) => {
            setExperience({ ...experience, company: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Location"
          onChange={(e) => {
            setExperience({ ...experience, location: e.target.value });
          }}
        />
        <div className="flex">
          <input
            type="checkbox"
            onChange={(e) => {
              setExperience({ ...experience, current: e.target.checked });
            }}
          />

          <p>i'm still working on this job</p>
        </div>
        <input
          type="date"
          placeholder="from"
          onChange={(e) => {
            setExperience({ ...experience, from: e.target.value });
          }}
        />

        <input
          type="date"
          placeholder="to"
          onChange={(e) => {
            setExperience({ ...experience, to: e.target.value });
          }}
        />
        <button onClick={() => {
            setExperiences([...experiences, experience]);
            setShowAddExperience(false);
        }}>Add Experience</button>
      </div>
     );
}
 
export default AddExperience;