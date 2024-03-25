const FifthHolderFatherValidations = (formData) => {
  let fifthHolderFatherFailedFields = {};

  if (
    !formData.title_father_fifth_account_holder ||
    formData.title_father_fifth_account_holder === ''
  ) {
    fifthHolderFatherFailedFields = {
      ...fifthHolderFatherFailedFields,
      title_father_fifth_account_holder: 'Title is empty or invalid',
    };
  }
  if (
    !formData.fname_father_fifth_account_holder ||
    formData.fname_father_fifth_account_holder === ''
  ) {
    fifthHolderFatherFailedFields = {
      ...fifthHolderFatherFailedFields,
      fname_father_fifth_account_holder: 'First Name is empty or invalid',
    };
  }
  if (
    !formData.lname_father_fifth_account_holder ||
    formData.lname_father_fifth_account_holder === ''
  ) {
    fifthHolderFatherFailedFields = {
      ...fifthHolderFatherFailedFields,
      lname_father_fifth_account_holder: 'Last Name is empty or invalid',
    };
  }

  return fifthHolderFatherFailedFields;
};

export default FifthHolderFatherValidations;
