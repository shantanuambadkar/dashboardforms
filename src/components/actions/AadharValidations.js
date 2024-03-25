const AadharValidations = (aadhar) => {
  if (aadhar.length === 12 || aadhar.length === 16) {
    return true;
  } else {
    return false;
  }
};

export default AadharValidations;
