const ForthHolderNameValidations = (formData) => {
  let forthHolderNameFailedFields = {};

  if (
    !formData.title_forth_account_holder ||
    formData.title_forth_account_holder === ''
  ) {
    forthHolderNameFailedFields = {
      ...forthHolderNameFailedFields,
      title_forth_account_holder: 'Title is invalid or empty',
    };
  }
  if (
    !formData.fname_forth_account_holder ||
    formData.fname_forth_account_holder === ''
  ) {
    forthHolderNameFailedFields = {
      ...forthHolderNameFailedFields,
      fname_forth_account_holder: 'First Name is invalid or empty',
    };
  }
  if (
    !formData.lname_forth_account_holder ||
    formData.lname_forth_account_holder === ''
  ) {
    forthHolderNameFailedFields = {
      ...forthHolderNameFailedFields,
      lname_forth_account_holder: 'Last Name is invalid or empty',
    };
  }

  return forthHolderNameFailedFields;
};

export default ForthHolderNameValidations;
