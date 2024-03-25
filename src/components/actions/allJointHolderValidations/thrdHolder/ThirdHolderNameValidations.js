const ThirdHolderNameValidations = (formData) => {
  let thrdHolderNameFailedFields = {};

  if (
    !formData.title_thrd_account_holder ||
    formData.title_thrd_account_holder === ''
  ) {
    thrdHolderNameFailedFields = {
      ...thrdHolderNameFailedFields,
      title_thrd_account_holder: 'Title is invalid or empty',
    };
  }
  if (
    !formData.fname_thrd_account_holder ||
    formData.fname_thrd_account_holder === ''
  ) {
    thrdHolderNameFailedFields = {
      ...thrdHolderNameFailedFields,
      fname_thrd_account_holder: 'First Name is invalid or empty',
    };
  }
  if (
    !formData.lname_thrd_account_holder ||
    formData.lname_thrd_account_holder === ''
  ) {
    thrdHolderNameFailedFields = {
      ...thrdHolderNameFailedFields,
      lname_thrd_account_holder: 'Last Name is invalid or empty',
    };
  }

  return thrdHolderNameFailedFields;
};

export default ThirdHolderNameValidations;
