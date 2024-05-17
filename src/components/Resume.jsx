function Resume({
  fullName,
  email,
  portfolio,
  phoneNumber,
  address,
  workExperiences,
  educationExperiences,
}) {
  return (
    <div id="resume">
      <div id="personal-section">
        <h1>{fullName}</h1>
        <p>
          {email}&nbsp;&nbsp;{portfolio}&nbsp;&nbsp;{phoneNumber}&nbsp;&nbsp;
          {address}
        </p>
      </div>

      {/* Experience Section */}
      <div className="resume-field">
        <h2>
          <strong>Experience:</strong>
        </h2>
        {workExperiences.map((experience, index) => (
          <div key={index}>
            <p>
              {experience.institutionName} - {experience.title}
              <br />
              {experience.startDuration} - {experience.endDuration}
              <br />
              {experience.institutionLocation}
              <br />
              {experience.description}
            </p>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="resume-field">
        <h2>
          <strong>Education:</strong>
        </h2>
        {educationExperiences.map((experience, index) => (
          <div key={index}>
            <p>
              {experience.institutionName} - {experience.title}
              <br />
              {experience.startDuration} - {experience.endDuration}
              <br />
              {experience.institutionLocation}
              <br />
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resume;
