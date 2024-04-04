function Dropdowns(ddName) {
  if (ddName === 'title') {
    return ['MR.', 'MRS.', 'MS.'];
  }
  if (ddName === 'yesNo') {
    return ['YES', 'NO'];
  }
  if (ddName === 'branch') {
    return ['AHMEDNAGAR', 'SAMBHAJI NAGAR', 'MUMBAI'];
  }
  if (ddName === 'accountType') {
    return ['SAVINGS', 'CURRENT'];
  }
  if (ddName === 'savingsAccType') {
    return ['SINGLE', 'JOINT'];
  }
  if (ddName === 'accOperatingInst') {
    return ['SINGLE', 'JOINTLY', 'OTHERS'];
  }
  if (ddName === 'gender') {
    return ['MALE', 'FEMALE', 'TRANSGENDER'];
  }
  if (ddName === 'nomineeRelationship') {
    return [
      'WIFE',
      'HUSBAND',
      'FATHER',
      'MOTHER',
      'BROTHER',
      'SISTER',
      'SON',
      'DAUGHTER',
      'FRIEND',
      'OTHER',
    ];
  }
  if (ddName === 'savingsDocuments') {
    return [
      'PAN CARD',
      'AADHAR CARD',
      'ELECTION CARD',
      'DRIVING LICENSE',
      'RATION CARD',
      'PASSPORT',
      'OTHERS',
    ];
  }
  if (ddName === 'form6061') {
    return ['FORM 60', 'FORM 61'];
  }
  if (ddName === 'education') {
    return [
      'BELOW SSC',
      'SSC',
      'HSC',
      'GRADUATE',
      'POST GRADUATE',
      'PROFESSIONAL',
    ];
  }
  if (ddName === 'maritalStatus') {
    return ['MARRIED', 'UNMARRIED'];
  }
  if (ddName === 'religion') {
    return ['HINDU', 'MUSLIM', 'SIKH', 'BAUDHA', 'JAIN', 'CHRISTIAN', 'OTHER'];
  }
  if (ddName === 'category') {
    return ['GENERAL', 'OBC', 'SC', 'ST', 'VJNT', 'OTHER'];
  }
  if (ddName === 'occupation') {
    return [
      'SERVICE',
      'BUSINESS',
      'HOUSE-WIFE',
      'RETIRED',
      'STUDENT',
      'SELF EMPLOYED',
      'OTHER',
    ];
  }
  //Dashboard
  if (ddName === 'dbPeriod') {
    return ['THIS MONTH', 'THIS WEEK', 'THIS QUARTER'];
  }
  if (ddName === 'dbBranch') {
    return ['ALL', 'AHMEDNAGAR', 'SAMBHAJI NAGAR', 'MUMBAI'];
  }
}

export default Dropdowns;
