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
  const [descriptions, setDescriptions] = useState(["", "", ""]);
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
      descriptions,
    };
    addExperience(typeOfInformation, newExperience);
    setInstitutionName("");
    setInstitutionLocation("");
    setStartDuration("");
    setEndDuration("");
    setTitle("");
    setDescriptions(["", "", ""]);
    setNewInformation(false);
  };

  const handleChange = (index, value) => {
    const newDescriptions = [...descriptions];
    newDescriptions[index] = value;
    setDescriptions(newDescriptions);
  };

  return (
    <div>
      <button className="regular-button" onClick={toggleFieldVisibility}>
        {typeOfInformation}
        <span className={`arrow ${toggleField ? "up" : "down"}`}></span>
      </button>

      {toggleField && (
        <>
          <button className="medium-button" onClick={toggleNewInformation}>
            Add New {typeOfInformation}
          </button>

          {newInformation && (
            <div className="info">
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
                    <span className="observation">recommended</span>
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
                    First Bullet Point
                    <span className="observation">recommended</span>
                  </label>
                  <textarea
                    className="description-input-field"
                    type="text"
                    placeholder="Enter something unique you did"
                    value={descriptions[0]}
                    onChange={(e) => handleChange(0, e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <label>
                    Second Bullet Point
                    <span className="observation">recommended</span>
                  </label>
                  <textarea
                    className="description-input-field"
                    type="text"
                    placeholder="Enter something unique you did"
                    value={descriptions[1]}
                    onChange={(e) => handleChange(1, e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <label>
                    First Bullet Point
                    <span className="observation">recommended</span>
                  </label>
                  <textarea
                    className="description-input-field"
                    type="text"
                    placeholder="Enter something unique you did"
                    value={descriptions[2]}
                    onChange={(e) => handleChange(2, e.target.value)}
                  />
                </div>
              </form>

              <div id="edit-buttons">
                <button className="medium-button" onClick={handleAddExperience}>
                  Save {typeOfInformation}
                </button>
              </div>
            </div>
          )}

          {experiences.map((experience, index) => (
            <div className="information-row" key={index}>
              <p>
                {index + 1} - {experience.institutionName}
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
