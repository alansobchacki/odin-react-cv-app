import { useState } from "react";

function PersonalInformation({
  fullName,
  setFullName,
  email,
  setEmail,
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
      <button onClick={toggleVisibility}>
        {isVisible ? "General Information ^" : "General Information v"}
      </button>

      {isVisible && (
        <div>
          <form>
            <label>Full Name: </label>
            <input
              type="text"
              placeholder="Your name."
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              maxLength={50}
            />

            <label>Email: </label>
            <input
              type="email"
              placeholder="Your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Phone Number: </label>
            <input
              type="tel"
              placeholder="(123) 456-7890"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <label>Address: </label>
            <input
              type="text"
              placeholder="San Diego, California"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </form>
        </div>
      )}
    </div>
  );
}

export default PersonalInformation;
