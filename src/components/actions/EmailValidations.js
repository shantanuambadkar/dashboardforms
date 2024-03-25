const EmailValidations = (emailID) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const setIsValidEmail = emailRegex.test(emailID);
  /* console.log('setIsValidEmail', setIsValidEmail); */
  return setIsValidEmail;
};

export default EmailValidations;
