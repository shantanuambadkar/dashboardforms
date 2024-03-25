import EmailValidations from '../EmailValidations';

const LoginValidations = (loginObj) => {
  if (Object.keys(loginObj).length > 0) {
    if (
      loginObj.subdomain &&
      loginObj.subdomain !== '' &&
      loginObj.email &&
      loginObj.email !== '' &&
      EmailValidations(loginObj.email) &&
      loginObj.password &&
      loginObj.password !== ''
    ) {
      return true;
    }
  } else {
    return false;
  }
};

export default LoginValidations;
