import { useState } from "react";

function Information({
  typeOfInformation,
  addExperience,
  experiences,
  removeExperience,
}) {
  const [institutionName, setInstitutionName] = useState("");
  const [institutionLocation, setInstitutionLocation] = useState("");
  const [startDuration, setStartDuration] = useState("");
  const [endDuration, setEndDuration] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toggleField, setToggleField] = useState(false);
  const [newInformation, setNewInformation] = useState(false);

  const toggleFieldVisibility = () => {
    setToggleField(!toggleField);
    setNewInformation(false);
  };

  const toggleNewInformation = () => {
    setNewInformation(!newInformation);
  };

  const handleAddExperience = () => {
    const newExperience = {
      institutionName,
      institutionLocation,
      startDuration,
      endDuration,
      title,
      description,
    };
    addExperience(typeOfInformation, newExperience);
    setInstitutionName("");
    setInstitutionLocation("");
    setStartDuration("");
    setEndDuration("");
    setTitle("");
    setDescription("");
    setNewInformation(false);
  };

  return (
    <div>
      <button className="regular-button" onClick={toggleFieldVisibility}>
        {typeOfInformation}
      </button>

      {toggleField && (
        <>
          <button className="small-button" onClick={toggleNewInformation}>
            +
          </button>

          {newInformation && (
            <div>
              <form>
                <div className="form-row">
                  <label>
                    Institution <span className="observation">required</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter institution name"
                    maxLength={50}
                    value={institutionName}
                    onChange={(e) => setInstitutionName(e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <label>
                    {typeOfInformation === "Education" ? (
                      <span>
                        Degree <span className="observation">required</span>
                      </span>
                    ) : (
                      <span>
                        Position Title{" "}
                        <span className="observation">required</span>
                      </span>
                    )}
                  </label>
                  <input
                    type="text"
                    placeholder="Enter position title"
                    maxLength={50}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <label>
                    Start Date <span className="observation">required</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter start date"
                    maxLength={10}
                    value={startDuration}
                    onChange={(e) => setStartDuration(e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <label>
                    End Date <span className="observation">required</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter end date (or present)"
                    maxLength={10}
                    value={endDuration}
                    onChange={(e) => setEndDuration(e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <label>
                    Institution Location{" "}
                    <span className="observation">optional</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter institution location"
                    maxLength={50}
                    value={institutionLocation}
                    onChange={(e) => setInstitutionLocation(e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <label>
                    Description{" "}
                    <span className="observation">optional, recommended</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter something unique you did"
                    maxLength={300}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </form>

              <div id="edit-buttons">
                <button className="small-button" onClick={handleAddExperience}>
                  +
                </button>
              </div>
            </div>
          )}

          {experiences.map((experience, index) => (
            <div key={index}>
              <p>
                {experience.institutionName}, {experience.title},{" "}
                {experience.startDuration}, {experience.endDuration},{" "}
                {experience.institutionLocation}, {experience.description}
              </p>
              <button
                className="small-button"
                onClick={() => removeExperience(typeOfInformation, index)}
              >
                -
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Information;
