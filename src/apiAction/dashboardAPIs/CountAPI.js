import axios from 'axios';
import ConvertDateFormat from '../../components/formComponents/reusableComponents/ConvertDateFormat';
import FailurePopup from '../../pages/FailurePopup';

function CountAPI(
  subdomain,
  formName,
  userRole,
  userBranch,
  userEmail,
  formattedDate,
  countOf
) {
  let branch = '';
  let apiFormName = '';

  let getCurrentDate = ConvertDateFormat(new Date());
  if (formattedDate) {
    getCurrentDate = ConvertDateFormat(new Date(formattedDate));
  }

  if (userRole === 'HO') {
    branch = 'all';
  } else {
    branch = userBranch;
  }

  if (!formName || formName === '') {
    apiFormName = 'savings_bank';
  } else {
    if (formName === 'savings') {
      apiFormName = 'savings_bank';
    } else {
      if (formName === 'current') {
        apiFormName = 'current_account';
      } else {
        if (formName === 'fd') {
          apiFormName = 'fixed_deposit';
        }
        if (formName === 'pmjjby') {
          apiFormName = 'pmsjjy';
        } else {
          apiFormName = formName;
        }
      }
    }
  }

  const baseURL =
    process.env.REACT_APP_LOGIN_URL +
    '/Stage/V1/' +
    apiFormName +
    '/count/' +
    countOf +
    '/' +
    getCurrentDate;

  let headerOperation = '';

  if (countOf) {
    if (countOf === 'all') {
      headerOperation = 'countAllByDate';
    }
    if (countOf === 'open') {
      headerOperation = 'countAllOpenByDate';
    }
    if (countOf === 'accepted') {
      headerOperation = 'countAllAcceptedByDate';
    }
    if (countOf === 'rejected') {
      headerOperation = 'countAllRejectedByDate';
    }
  }

  const headerTag = {
    subdomain: subdomain,
    operation: headerOperation,
    user: userEmail,
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
            FailurePopup(formName, response.data.message);
            reject(response.data);
          } else {
            FailurePopup(
              formName,
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
