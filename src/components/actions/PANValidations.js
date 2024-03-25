const PANValidations = (PanNo) => {
  const PANSplitArr = PanNo.split('');
  if (PANSplitArr.length === 10) {
    if (
      /[a-zA-Z]/.test(PANSplitArr[0]) === true &&
      /[a-zA-Z]/.test(PANSplitArr[1]) === true &&
      /[a-zA-Z]/.test(PANSplitArr[2]) === true &&
      /[a-zA-Z]/.test(PANSplitArr[3]) === true &&
      /[a-zA-Z]/.test(PANSplitArr[4]) === true &&
      /[0-9]/.test(PANSplitArr[5]) === true &&
      /[0-9]/.test(PANSplitArr[6]) === true &&
      /[0-9]/.test(PANSplitArr[7]) === true &&
      /[0-9]/.test(PANSplitArr[8]) === true &&
      /[a-zA-Z]/.test(PANSplitArr[9]) === true
    ) {
      return true;
      //console.log('panValid is true now');
    } else {
      return false;
      //console.log('panValid is false but length is 10');
    }
  } else {
    return false;
    //console.log('panValid is false and length is <> 10');
  }
};

export default PANValidations;
