function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button id="save-resume-button" onClick={handlePrint}>
      Save Resume
    </button>
  );
}

export default PrintButton;
