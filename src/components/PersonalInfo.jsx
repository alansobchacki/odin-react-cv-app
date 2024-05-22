import { useState } from "react";

function PersonalInformation({
  fullName,
  setFullName,
  email,
  setEmail,
  portfolio,
  setPortfolio,
  phoneNumber,
  setPhoneNumber,
  address,
  setAddress,
}) {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="">
      <button className="regular-button" onClick={toggleVisibility}>
        General Information
        <span className={`arrow ${isVisible ? "up" : "down"}`}></span>
      </button>

      {isVisible && (
        <div className="info">
          <form>
            <div className="form-row">
              <label>
                Full Name <span className="observation">required</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                maxLength={50}
              />
            </div>

            <div className="form-row">
              <label>
                Email <span className="observation">required</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-row">
              <label>
                Portfolio <span className="observation">required</span>
              </label>
              <input
                type="text"
                placeholder="Enter your portfolio (github, linkedin...)"
                value={portfolio}
                onChange={(e) => setPortfolio(e.target.value)}
              />
            </div>

            <div className="form-row">
              <label>
                Phone Number <span className="observation">recommended</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="form-row">
              <label>
                Address <span className="observation">recommended</span>
              </label>
              <input
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default PersonalInformation;
