const ForthHolderFatherValidations = (formData) => {
  let forthHolderFatherFailedFields = {};

  if (
    !formData.title_father_forth_account_holder ||
    formData.title_father_forth_account_holder === ''
  ) {
    forthHolderFatherFailedFields = {
      ...forthHolderFatherFailedFields,
      title_father_forth_account_holder: 'Title is empty or invalid',
    };
  }
  if (
    !formData.fname_father_forth_account_holder ||
    formData.fname_father_forth_account_holder === ''
  ) {
    forthHolderFatherFailedFields = {
      ...forthHolderFatherFailedFields,
      fname_father_forth_account_holder: 'First Name is empty or invalid',
    };
  }
  if (
    !formData.lname_father_forth_account_holder ||
    formData.lname_father_forth_account_holder === ''
  ) {
    forthHolderFatherFailedFields = {
      ...forthHolderFatherFailedFields,
      lname_father_forth_account_holder: 'Last Name is empty or invalid',
    };
  }

  return forthHolderFatherFailedFields;
};

export default ForthHolderFatherValidations;
