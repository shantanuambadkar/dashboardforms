import axios from 'axios';
//import ConvertDateFormat from '../../components/formComponents/reusableComponents/ConvertDateFormat';
import FailurePopup from '../../pages/FailurePopup';

function CallGridAPI(gridInputParams, setDBList) {
  let formName = '';

  if (gridInputParams.formName) {
    if (gridInputParams.formName === 'savings') {
      formName = 'savings_bank';
    }
    if (gridInputParams.formName === 'current') {
      formName = 'current_account';
    }
    if (gridInputParams.formName === 'fd') {
      formName = 'fixed_deposit';
    }
    if (gridInputParams.formName === 'pmjjby') {
      formName = 'pmsjjy';
    }
    if (gridInputParams.formName === 'pmsby') {
      formName = 'pmsby';
    }
    if (gridInputParams.formName === 'fastag') {
      formName = 'fastag';
    }
  } else {
    formName = 'savings_bank';
  }

  const baseURL =
    process.env.REACT_APP_LOGIN_URL +
    '/Stage/V1/' +
    formName +
    '/' +
    gridInputParams.userBranch +
    '/' +
    gridInputParams.fromDate +
    '/' +
    gridInputParams.pageNo;

  let headerOperation = '';

  if (gridInputParams.userRole === 'HO') {
    headerOperation = 'fetchAllByDate';
  } else {
    headerOperation = 'fetchBranchByDate';
  }

  const headerTag = {
    subdomain: gridInputParams.subdomain,
    operation: headerOperation,
    user: gridInputParams.userEmail,
  };

  return new Promise((resolve, reject) => {
    axios
      .get(baseURL, {
        headers: headerTag,
      })
      .then((response) => {
        if (response.status === 200) {
          /* console.log('response from Grid API', response.data); */
          setDBList(response.data);
          resolve(response.data);
        } else {
          if (response && response.data) {
            FailurePopup('DashboardGrid', response.data.message);
            reject(response.data);
          } else {
            FailurePopup(
              'DashboardGrid',
              'Grid API failed due to unforeseen errors'
            );
            reject('Grid API failed due to unforeseen errors');
          }
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}

export default CallGridAPI;
