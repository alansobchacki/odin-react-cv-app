function Resume({ fullName, email, phoneNumber, address }) {
  return (
    <div>
      <h2>{fullName}</h2>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phoneNumber}
      </p>
      <p>
        <strong>Address:</strong> {address}
      </p>
    </div>
  );
}

export default Resume;
