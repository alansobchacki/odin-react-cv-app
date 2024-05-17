import { useState } from "react";
import Resume from "./components/Resume.jsx";
import PersonalInformation from "./components/PersonalInfo.jsx";
import Information from "./components/Information.jsx";
import "./App.css";

function App() {
  // General information
  const [fullName, setFullName] = useState("Your Name");
  const [email, setEmail] = useState("you@email.com");
  const [portfolio, setPortfolio] = useState("github.com/you");
  const [phoneNumber, setPhoneNumber] = useState("(123) 456-7890");
  const [address, setAddress] = useState("Some City, Some State");

  // Work Experience
  const [workExperiences, setWorkExperiences] = useState([]);
  // Education
  const [educationExperiences, setEducationExperiences] = useState([]);

  const addExperience = (type, newExperience) => {
    if (type === "Experience") {
      setWorkExperiences([...workExperiences, newExperience]);
    } else if (type === "Education") {
      setEducationExperiences([...educationExperiences, newExperience]);
    }
  };

  const removeExperience = (type, index) => {
    if (type === "Experience") {
      setWorkExperiences(workExperiences.filter((_, i) => i !== index));
    } else if (type === "Education") {
      setEducationExperiences(
        educationExperiences.filter((_, i) => i !== index)
      );
    }
  };

  return (
    <div id="main-container">
      <div id="info-container">
        <div className="info">
          <PersonalInformation
            fullName={fullName}
            setFullName={setFullName}
            email={email}
            setEmail={setEmail}
            portfolio={portfolio}
            setPortfolio={setPortfolio}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            address={address}
            setAddress={setAddress}
          />
        </div>
        <div className="info">
          <Information
            typeOfInformation="Experience"
            addExperience={addExperience}
            experiences={workExperiences}
            removeExperience={removeExperience}
          />
        </div>
        <div className="info">
          <Information
            typeOfInformation="Education"
            addExperience={addExperience}
            experiences={educationExperiences}
            removeExperience={removeExperience}
          />
        </div>
      </div>
      <div id="resume">
        <Resume
          fullName={fullName}
          email={email}
          portfolio={portfolio}
          phoneNumber={phoneNumber}
          address={address}
          workExperiences={workExperiences}
          educationExperiences={educationExperiences}
        />
      </div>
    </div>
  );
}

export default App;
