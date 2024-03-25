const SecondHolderNameValidations = (formData) => {
  let secondHolderNameFailedFields = {};

  if (
    !formData.title_scnd_account_holder ||
    formData.title_scnd_account_holder === ''
  ) {
    secondHolderNameFailedFields = {
      ...secondHolderNameFailedFields,
      title_scnd_account_holder: 'Title is invalid or empty',
    };
  }
  if (
    !formData.fname_scnd_account_holder ||
    formData.fname_scnd_account_holder === ''
  ) {
    secondHolderNameFailedFields = {
      ...secondHolderNameFailedFields,
      fname_scnd_account_holder: 'First Name is invalid or empty',
    };
  }
  if (
    !formData.lname_scnd_account_holder ||
    formData.lname_scnd_account_holder === ''
  ) {
    secondHolderNameFailedFields = {
      ...secondHolderNameFailedFields,
      lname_scnd_account_holder: 'Last Name is invalid or empty',
    };
  }

  return secondHolderNameFailedFields;
};

export default SecondHolderNameValidations;
