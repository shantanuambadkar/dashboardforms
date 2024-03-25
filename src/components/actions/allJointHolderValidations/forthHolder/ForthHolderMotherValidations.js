const ForthHolderMotherValidations = (formData) => {
  let forthHolderMotherFailedFields = {};

  if (
    !formData.title_mother_forth_account_holder ||
    formData.title_mother_forth_account_holder === ''
  ) {
    forthHolderMotherFailedFields = {
      ...forthHolderMotherFailedFields,
      title_mother_forth_account_holder: 'Title is empty or invalid',
    };
  }
  if (
    !formData.fname_mother_forth_account_holder ||
    formData.fname_mother_forth_account_holder === ''
  ) {
    forthHolderMotherFailedFields = {
      ...forthHolderMotherFailedFields,
      fname_mother_forth_account_holder: 'First Name is empty or invalid',
    };
  }
  if (
    !formData.lname_mother_forth_account_holder ||
    formData.lname_mother_forth_account_holder === ''
  ) {
    forthHolderMotherFailedFields = {
      ...forthHolderMotherFailedFields,
      lname_mother_forth_account_holder: 'Last Name is empty or invalid',
    };
  }

  return forthHolderMotherFailedFields;
};

export default ForthHolderMotherValidations;
