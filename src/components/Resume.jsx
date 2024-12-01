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
        <h2>•&nbsp;{email} •&nbsp;{portfolio} •&nbsp;{phoneNumber} •&nbsp;{address}</h2>
      </div>
      <div className="resume-line"></div>

      {/* Experience Section */}
      <div className="information-field">
        <h3><b>Experience:</b></h3>
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
          </div>
        ))}
      </div>
      <div className="resume-line"></div>

      {/* Education Section */}
      <div className="information-field">
        <h3><b>Education:</b></h3>
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
      <div className="information-field">
        <h3><b>Skills:</b></h3>

        <div className=" resume-info-container">
          <p>{skills}</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
