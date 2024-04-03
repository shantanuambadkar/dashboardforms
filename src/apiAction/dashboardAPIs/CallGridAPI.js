import axios from 'axios';
import FailurePopup from '../../pages/FailurePopup';

function CallGridAPI(gridInputParams, setDBList) {
  let branch =
    gridInputParams.userBranch === 'HO' ? 'all' : gridInputParams.userBranch;

  const baseURL =
    process.env.REACT_APP_LOGIN_URL +
    '/Stage/V1/' +
    gridInputParams.formName +
    '/' +
    branch +
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
            FailurePopup('Grid API', response.data.message);
            reject(response.data);
          } else {
            FailurePopup(
              'Grid API',
              'Grid API failed due to unforeseen errors'
            );
            reject('CallGridAPI failed due to unforeseen errors');
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
