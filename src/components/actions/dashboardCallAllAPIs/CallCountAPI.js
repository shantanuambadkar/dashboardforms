import CountAPI from '../../../apiAction/dashboardAPIs/CountAPI';

async function CallCountAPI(countAPIObj) {
  let objCount = {};

  try {
    const [totalCnt, openCnt, approvedCnt, rejectedCnt] = await Promise.all([
      CountAPI(
        countAPIObj.subdomain,
        countAPIObj.formName,
        countAPIObj.userRole,
        countAPIObj.userBranch,
        countAPIObj.userEmail,
        countAPIObj.formattedDate,
        'all'
      ),
      CountAPI(
        countAPIObj.subdomain,
        countAPIObj.formName,
        countAPIObj.userRole,
        countAPIObj.userBranch,
        countAPIObj.userEmail,
        countAPIObj.formattedDate,
        'open'
      ),
      CountAPI(
        countAPIObj.subdomain,
        countAPIObj.formName,
        countAPIObj.userRole,
        countAPIObj.userBranch,
        countAPIObj.userEmail,
        countAPIObj.formattedDate,
        'accepted'
      ),
      CountAPI(
        countAPIObj.subdomain,
        countAPIObj.formName,
        countAPIObj.userRole,
        countAPIObj.userBranch,
        countAPIObj.userEmail,
        countAPIObj.formattedDate,
        'rejected'
      ),
    ]);

    // Assign counts to objCount
    objCount = { totalCnt, openCnt, approvedCnt, rejectedCnt };

    return objCount;
  } catch (e) {
    console.log('Error while calling async Count APIs', e);
  }
}

export default CallCountAPI;
