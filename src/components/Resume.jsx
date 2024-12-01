function Resume({
  fullName,
  email,
  portfolio,
  phoneNumber,
  address,
  workExperiences,
  educationExperiences,
  skills
}) {
  return (
    <div id="resume">
      <div id="personal-section">
        <h1>{fullName}</h1>
        <p>•&nbsp;{email} •&nbsp;{portfolio} •&nbsp;{phoneNumber} •&nbsp;{address}</p>
      </div>

      <div className="resume-line"></div>
      <br></br>

      {/* Experience Section */}
      <div>
        <h2><b>Experience:</b></h2>
        {workExperiences.map((experience, index) => (
          <div key={index}>
            <div className=" resume-info-container">
              <p><b>{experience.institutionName}</b></p>
              <p><b>{experience.startDuration} — {experience.endDuration}</b></p>
            </div>

            <div className=" resume-info-container">
              <p><i>{experience.title}</i></p>
              <p><i>{experience.institutionLocation}</i></p>
            </div>

            <div className="resume-info-container">
              <ul>
                {experience.descriptions &&
                  experience.descriptions
                    .filter((description) => description.trim() !== "")
                    .map((description, index) => (
                      <li key={index}>{description}</li>
                    ))
                }
              </ul>
            </div>
            <br></br>
          </div>
        ))}
      </div>

      <div className="resume-line"></div>

      {/* Education Section */}
      <div>
        <h2><b>Education:</b></h2>
        {educationExperiences.map((experience, index) => (
          <div key={index}>
            <div className=" resume-info-container">
              <p><b>{experience.institutionName}</b></p>
              <p><b>{experience.startDuration} — {experience.endDuration}</b></p>
            </div>

            <div className=" resume-info-container">
              <p><i>{experience.title}</i></p>
              <p><i>{experience.institutionLocation}</i></p>
            </div>

            <div className="resume-info-container">
              <ul>
                {experience.descriptions &&
                  experience.descriptions
                    .filter((description) => description.trim() !== "")
                    .map((description, index) => (
                      <li key={index}>{description}</li>
                    ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="resume-line"></div>

      {/* Skills Section */}
      <div>
        <h2><b>Skills:</b></h2>
        <p>{skills}</p>
      </div>
    </div>
  );
}

export default Resume;
