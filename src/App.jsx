import { useState } from "react";
import Resume from "./components/Resume.jsx";
import PersonalInformation from "./components/PersonalInfo.jsx";
import Information from "./components/Information.jsx";
import "./App.css";

function App() {
  // General information
  const [fullName, setFullName] = useState("Charles Kelly");
  const [email, setEmail] = useState("charliek@paddyspub.com");
  const [portfolio, setPortfolio] = useState("github.com/dayman");
  const [phoneNumber, setPhoneNumber] = useState("(215) 555-0199");
  const [address, setAddress] = useState("1234 Trash Alley");

  // Work Experience
  const [workExperiences, setWorkExperiences] = useState([
    {
      institutionName: "Some Random Mall",
      institutionLocation: "Somewhere in Philly",
      startDuration: "2023-04-02",
      endDuration: "Present",
      title: "Mail Room Officer",
      description:
        "In charge of organizing mail and sometimes tracking missing people.",
    },
    {
      institutionName: "Paddy's Pub",
      institutionLocation: "Somewhere in Philly",
      startDuration: "2005-04-02",
      endDuration: "2023-03-01",
      title: "Co-Owner / Janitor",
      description:
        "Executed well over 500+ rodents with a single, custom-made, spiked baseball bat.",
    },
  ]);
  // Education
  const [educationExperiences, setEducationExperiences] = useState([
    {
      institutionName: " Philly University",
      institutionLocation: "Somewhere in Philly",
      startDuration: "2019-04-02",
      endDuration: "2023-04-02",
      title: "Bachelors in Bird Law",
      description:
        "Had a GPA of over 2.2 by feeding the local pidgeons with second-grade corn.",
    },
  ]);

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
