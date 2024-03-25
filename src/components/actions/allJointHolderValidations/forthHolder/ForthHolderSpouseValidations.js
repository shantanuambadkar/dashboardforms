const ForthHolderSpouseValidations = (formData) => {
  let forthHolderSpouseFailedFields = {};

  if (
    !formData.title_spouse_forth_account_holder ||
    formData.title_spouse_forth_account_holder === ''
  ) {
    forthHolderSpouseFailedFields = {
      ...forthHolderSpouseFailedFields,
      title_spouse_forth_account_holder: 'Title is empty or invalid',
    };
  }
  if (
    !formData.fname_spouse_forth_account_holder ||
    formData.fname_spouse_forth_account_holder === ''
  ) {
    forthHolderSpouseFailedFields = {
      ...forthHolderSpouseFailedFields,
      fname_spouse_forth_account_holder: 'First Name is empty or invalid',
    };
  }
  if (
    !formData.lname_spouse_forth_account_holder ||
    formData.lname_spouse_forth_account_holder === ''
  ) {
    forthHolderSpouseFailedFields = {
      ...forthHolderSpouseFailedFields,
      lname_spouse_forth_account_holder: 'Last Name is empty or invalid',
    };
  }

  return forthHolderSpouseFailedFields;
};

export default ForthHolderSpouseValidations;
