import { useState } from "react";
import Resume from "./components/Resume.jsx";
import PersonalInformation from "./components/PersonalInfo.jsx";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState("Your Name");
  const [email, setEmail] = useState("Your Email");
  const [phoneNumber, setPhoneNumber] = useState("(123) 456-7890");
  const [address, setAddress] = useState("San Diego, California");

  return (
    <div id="main-container">
      <div id="personal-info">
        <PersonalInformation
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          address={address}
          setAddress={setAddress}
        />
      </div>
      <div id="resume">
        <Resume
          fullName={fullName}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
        />
      </div>
    </div>
  );
}

export default App;
