const FifthHolderMotherValidations = (formData) => {
  let fifthHolderMotherFailedFields = {};

  if (
    !formData.title_mother_fifth_account_holder ||
    formData.title_mother_fifth_account_holder === ''
  ) {
    fifthHolderMotherFailedFields = {
      ...fifthHolderMotherFailedFields,
      title_mother_fifth_account_holder: 'Title is empty or invalid',
    };
  }
  if (
    !formData.fname_mother_fifth_account_holder ||
    formData.fname_mother_fifth_account_holder === ''
  ) {
    fifthHolderMotherFailedFields = {
      ...fifthHolderMotherFailedFields,
      fname_mother_fifth_account_holder: 'First Name is empty or invalid',
    };
  }
  if (
    !formData.lname_mother_fifth_account_holder ||
    formData.lname_mother_fifth_account_holder === ''
  ) {
    fifthHolderMotherFailedFields = {
      ...fifthHolderMotherFailedFields,
      lname_mother_fifth_account_holder: 'Last Name is empty or invalid',
    };
  }

  return fifthHolderMotherFailedFields;
};

export default FifthHolderMotherValidations;
