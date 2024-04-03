function PassFormNamesInAPI(fName) {
  if (fName) {
    if (fName === 'savings') {
      return 'savings_bank';
    } else {
      if (fName === 'current') {
        return 'current_account';
      } else {
        if (fName === 'fd') {
          return 'fixed_deposit';
        } else {
          if (fName === 'pmjjby') {
            return 'pmsjjy';
          } else {
            return fName;
          }
        }
      }
    }
  } else {
    return 'savings_bank';
  }
}

export default PassFormNamesInAPI;
