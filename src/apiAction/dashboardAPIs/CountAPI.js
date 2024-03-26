/* import axios from 'axios'; */

function CountAPI(formName, userRole, userBranch, responseCount) {
  let branch = '';
  let apiFormName = '';

  if (userRole === 'HO') {
    branch = 'all';
  } else {
    branch = userBranch;
  }

  if (!formName || formName === '') {
    apiFormName = 'savings';
  } else {
    apiFormName = formName;
  }

  let baseURL =
    process.env.REACT_APP_LOGIN_URL +
    '/Stage/V1/' +
    apiFormName +
    '/count/' +
    branch +
    '/26-03-2024';

  console.log('baseURL', baseURL);

  /* const subDomain = UpCase(loginObj.subdomain);

  const headerTag = {
    subdomain: subDomain,
    operation: 'login',
  }; */

  /*   return new Promise((resolve, reject) => {
    setTimeout(() => {
      axios
        .post(baseURL, JSON.stringify(loginObj), {
          headers: headerTag,
        })
        .then((response) => {
          if (response) {
            console.log('Success ', response.data);
            setUser(response.data);
            resolve(response.data);
          } else {
            if (response.message) {
              console.log('Login Failed due to ', response.message);
              reject(response.message);
            } else {
              console.log('Login Failed due to unforeseen errors');
              reject('Login Failed due to unforeseen errors');
            }
          }
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    }, 1000);
  }); */
}

export default CountAPI;
