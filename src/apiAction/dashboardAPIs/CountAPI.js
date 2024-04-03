import axios from 'axios';
import FailurePopup from '../../pages/FailurePopup';

function CountAPI(countObj) {
  /* console.log('countObj', countObj); */

  let apiFormName = '';

  if (!countObj.formName || countObj.formName === '') {
    apiFormName = 'savings_bank';
  } else {
    if (countObj.formName === 'savings') {
      apiFormName = 'savings_bank';
    } else {
      if (countObj.formName === 'current') {
        apiFormName = 'current_account';
      } else {
        if (countObj.formName === 'fd') {
          apiFormName = 'fixed_deposit';
        }
        if (countObj.formName === 'pmjjby') {
          apiFormName = 'pmsjjy';
        } else {
          apiFormName = countObj.formName;
        }
      }
    }
  }

  const baseURL =
    process.env.REACT_APP_LOGIN_URL +
    '/Stage/V1/' +
    apiFormName +
    '/count/' +
    countObj.countOf +
    '/' +
    countObj.fromDate;

  let headerOperation = '';

  if (countObj.countOf) {
    if (countObj.countOf === 'all') {
      headerOperation = 'countAllByDate';
    }
    if (countObj.countOf === 'open') {
      headerOperation = 'countAllOpenByDate';
    }
    if (countObj.countOf === 'accepted') {
      headerOperation = 'countAllAcceptedByDate';
    }
    if (countObj.countOf === 'rejected') {
      headerOperation = 'countAllRejectedByDate';
    }
  }

  const headerTag = {
    subdomain: countObj.subdomain,
    operation: headerOperation,
    user: countObj.userEmail,
  };

  return new Promise((resolve, reject) => {
    axios
      .get(baseURL, {
        headers: headerTag,
      })
      .then((response) => {
        if (response) {
          resolve(response.data.count);
        } else {
          if (response && response.data) {
            FailurePopup('DashboardCount', response.data.message);
            reject(response.data);
          } else {
            FailurePopup(
              'DashboardCount',
              'Get Count API failed due to unforeseen errors'
            );
            reject('Get Count API failed due to unforeseen errors');
          }
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}

export default CountAPI;
