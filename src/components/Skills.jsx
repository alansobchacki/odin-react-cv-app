import { useState } from "react";

function SkillInformation({
  skillsExperiences,
  setSkillsExperiences
}) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="">
      <button className="regular-button" onClick={toggleVisibility}>
        Skills
        <span className={`arrow ${isVisible ? "up" : "down"}`}></span>
      </button>

      {isVisible && (
        <div className="info">
          <form>
            <div className="form-row">
              <label>
                Skills <span className="observation">recommended</span>
              </label>
              <input
                type="text"
                placeholder="Enter your skills"
                value={skillsExperiences}
                onChange={(e) => setSkillsExperiences(e.target.value)}
                maxLength={250}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default SkillInformation;
