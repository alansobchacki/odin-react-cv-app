import { useState } from "react";
import Resume from "./components/Resume.jsx";
import PersonalInformation from "./components/PersonalInfo.jsx";
import Information from "./components/Information.jsx";
import PrintButton from "./components/PrintButton.jsx";
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
      title: "Mail Room Worker",
      descriptions: [
        "In charge of organizing mail for hundreds of mall workers.",
        "Improved efficiency on mail-sorting process by building wall maps.",
        "Single-handedly discovered the identity of the illusive Pepe Silvia.",
      ],
    },
    {
      institutionName: "Paddy's Pub",
      institutionLocation: "Somewhere in Philly",
      startDuration: "2005-04-02",
      endDuration: "2023-03-01",
      title: "Co-Owner / Janitor",
      descriptions: [
        "Executed well over 500+ rodents through the usage of a custom-made spiked baseball bat.",
        "Implemented a creative marketing strategy involving hand-drawn flyers and street performances to promote Paddy's Pub's signature drinks and specials.",
        "Initiated a ''Charlie Work'' program, improving the cleaning process of the bar.",
      ],
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
      descriptions: [
        "Participated in a unique externship program with a renowned ornithologist, gaining hands-on experience in bird law.",
      ],
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
        <Information
          typeOfInformation="Experience"
          addExperience={addExperience}
          experiences={workExperiences}
          removeExperience={removeExperience}
        />
        <Information
          typeOfInformation="Education"
          addExperience={addExperience}
          experiences={educationExperiences}
          removeExperience={removeExperience}
        />
        <PrintButton />
      </div>

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
  );
}

export default App;
