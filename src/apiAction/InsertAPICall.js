import axios from 'axios';

function InsertAPICall(formData, formName) {
  let baseURL =
    process.env.REACT_APP_INSERT_URL + '/Stage/V1/' + formName + '/insert';

  const windowHREF = window.location.href;
  const splitwindowHREF = windowHREF.split('/');
  const mainSubDomain = splitwindowHREF[2].split(':');
  let subD;
  let subDArray = mainSubDomain[0].split('.');
  if (
    subDArray[0] === 'open-account-forms' ||
    subDArray[0] === 'inbank-open-forms'
  ) {
    subD = 'yucbl';
  } else {
    subD = subDArray;
  }

  const headerTag = {
    'Content-Type': 'application/json; charset=UTF-8',
    subdomain: subD,
    operation: 'insert',
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      axios
        .post(baseURL, formData, {
          headers: headerTag,
        })
        .then((response) => {
          if (response) {
            console.log('Success ', response.data);
            resolve(response.data);
          } else {
            if (response.message) {
              console.log('Failed ', response.message);
              reject(response.message);
            } else {
              console.log('Failed');
              reject('Failed');
            }
          }
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    }, 1000);
  });
}

export default InsertAPICall;
