function GetFormListAPI(userBranch, formName, skip, formattedDate) {
  const baseURL =
    process.env.REACT_APP_LOGIN_URL +
    '/Stage/V1/' +
    formName +
    '/' +
    userBranch +
    '/' +
    formattedDate +
    '/' +
    skip;

  console.log('baseURL', baseURL);
}

export default GetFormListAPI;
