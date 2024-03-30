import axios from 'axios';
import UpCase from '../components/formComponents/fields/UpCase';
import FailurePopup from '../pages/FailurePopup';

function LoginAPICall(loginObj, setUser) {
  let baseURL = process.env.REACT_APP_LOGIN_URL + '/Stage/V1/login';
  const subDomain = UpCase(loginObj.subdomain);

  const headerTag = {
    subdomain: subDomain,
    operation: 'login',
  };

  return new Promise((resolve, reject) => {
    axios
      .post(baseURL, JSON.stringify(loginObj), {
        headers: headerTag,
      })
      .then((response) => {
        if (response) {
          setUser(response.data);
          resolve(response.data);
        } else {
          if (response.data) {
            FailurePopup('Login', response.data.message);
            reject(response.data);
          } else {
            FailurePopup('Login', 'Login Failed due to unforeseen errors');
            reject('Login Failed due to unforeseen errors');
          }
        }
      })
      .catch((err) => {
        FailurePopup('Login', 'Login Failed due to unforeseen errors');
        reject(err);
      });
  });
}

export default LoginAPICall;
