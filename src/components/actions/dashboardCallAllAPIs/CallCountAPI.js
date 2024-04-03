import CountAPI from '../../../apiAction/dashboardAPIs/CountAPI';

async function CallCountAPI(countAPIObj, setCounts) {
  /* console.log('countAPIObj', countAPIObj); */
  let objCount = {};
  const countAPIObjAll = { ...countAPIObj, countOf: 'all' };
  const countAPIObjOpen = { ...countAPIObj, countOf: 'open' };
  const countAPIObjAccepted = { ...countAPIObj, countOf: 'accepted' };
  const countAPIObjRejected = { ...countAPIObj, countOf: 'rejected' };

  try {
    const [totalCnt, openCnt, approvedCnt, rejectedCnt] = await Promise.all([
      CountAPI(countAPIObjAll),
      CountAPI(countAPIObjOpen),
      CountAPI(countAPIObjAccepted),
      CountAPI(countAPIObjRejected),
    ]);

    // Assign counts to objCount
    objCount = { totalCnt, openCnt, approvedCnt, rejectedCnt };

    setCounts(objCount);

    return objCount;
  } catch (e) {
    console.log('Error while calling async Count APIs', e);
  }
}

export default CallCountAPI;
