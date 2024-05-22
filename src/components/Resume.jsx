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
          •&nbsp;{email} •&nbsp;{portfolio} •&nbsp;{phoneNumber} •&nbsp;
          {address}
        </p>
      </div>

      <div className="resume-line"></div>
      <br></br>

      {/* Experience Section */}
      <div>
        <h2>
          <strong>Experience:</strong>
        </h2>
        {workExperiences.map((experience, index) => (
          <div key={index}>
            <div className=" resume-info-container">
              <p>
                <strong>{experience.institutionName}</strong>
              </p>

              <p>
                <strong>
                  {experience.startDuration} — {experience.endDuration}
                </strong>
              </p>
            </div>

            <div className=" resume-info-container">
              <p>
                <i>{experience.title}</i>
              </p>

              <p>
                <i>{experience.institutionLocation}</i>
              </p>
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
            <br></br>
          </div>
        ))}
      </div>

      <div className="resume-line"></div>

      {/* Education Section */}
      <div>
        <h2>
          <strong>Education:</strong>
        </h2>
        {educationExperiences.map((experience, index) => (
          <div key={index}>
            <div className=" resume-info-container">
              <p>
                <strong>{experience.institutionName}</strong>
              </p>

              <p>
                <strong>
                  {experience.startDuration} — {experience.endDuration}
                </strong>
              </p>
            </div>

            <div className=" resume-info-container">
              <p>
                <i>{experience.title}</i>
              </p>

              <p>
                <i>{experience.institutionLocation}</i>
              </p>
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
    </div>
  );
}

export default Resume;
