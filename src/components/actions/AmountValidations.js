const AmountValidations = (formData) => {
  let failedAmountFields = {};

  if (!formData.amt_no) {
    failedAmountFields = {
      ...failedAmountFields,
      amt_no: 'Amount is invalid or empty',
    };
  } else {
    let amtNo_Number = Number(formData.amt_no);
    if (amtNo_Number && amtNo_Number <= 0) {
      failedAmountFields = {
        ...failedAmountFields,
        amt_no: 'Amount is invalid',
      };
    }
  }

  return failedAmountFields;
};

export default AmountValidations;
