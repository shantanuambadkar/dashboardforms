const SavingsFormValidations = (formData) => {
  var failedSavingsFormFileds = {};

  if (!formData.account_type || formData.account_type === '') {
    failedSavingsFormFileds = {
      ...failedSavingsFormFileds,
      account_type: 'Account Type is invalid or empty',
    };
  }
  if (
    formData.account_type &&
    formData.account_type === 'JOINT' &&
    (!formData.transaction_instruction ||
      formData.transaction_instruction === '')
  ) {
    failedSavingsFormFileds = {
      ...failedSavingsFormFileds,
      transaction_instruction: 'Operating Instructions is invalid or empty',
    };
  }
  if (
    formData.transaction_instruction &&
    formData.transaction_instruction === 'OTHERS' &&
    (!formData.other_transaction_instruction ||
      formData.other_transaction_instruction === '')
  ) {
    failedSavingsFormFileds = {
      ...failedSavingsFormFileds,
      other_transaction_instruction:
        'Other Operating Instructions is invalid or empty',
    };
  }

  return failedSavingsFormFileds;
};

export default SavingsFormValidations;
