const FifthHolderNameValidations = (formData) => {
  let fifthHolderNameFailedFields = {};

  if (
    !formData.title_fifth_account_holder ||
    formData.title_fifth_account_holder === ''
  ) {
    fifthHolderNameFailedFields = {
      ...fifthHolderNameFailedFields,
      title_fifth_account_holder: 'Title is invalid or empty',
    };
  }
  if (
    !formData.fname_fifth_account_holder ||
    formData.fname_fifth_account_holder === ''
  ) {
    fifthHolderNameFailedFields = {
      ...fifthHolderNameFailedFields,
      fname_fifth_account_holder: 'First Name is invalid or empty',
    };
  }
  if (
    !formData.lname_fifth_account_holder ||
    formData.lname_fifth_account_holder === ''
  ) {
    fifthHolderNameFailedFields = {
      ...fifthHolderNameFailedFields,
      lname_fifth_account_holder: 'Last Name is invalid or empty',
    };
  }

  return fifthHolderNameFailedFields;
};

export default FifthHolderNameValidations;
