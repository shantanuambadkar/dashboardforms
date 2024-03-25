const FifthHolderSpouseValidations = (formData) => {
  let fifthHolderSpouseFailedFields = {};

  if (
    !formData.title_spouse_fifth_account_holder ||
    formData.title_spouse_fifth_account_holder === ''
  ) {
    fifthHolderSpouseFailedFields = {
      ...fifthHolderSpouseFailedFields,
      title_spouse_fifth_account_holder: 'Title is empty or invalid',
    };
  }
  if (
    !formData.fname_spouse_fifth_account_holder ||
    formData.fname_spouse_fifth_account_holder === ''
  ) {
    fifthHolderSpouseFailedFields = {
      ...fifthHolderSpouseFailedFields,
      fname_spouse_fifth_account_holder: 'First Name is empty or invalid',
    };
  }
  if (
    !formData.lname_spouse_fifth_account_holder ||
    formData.lname_spouse_fifth_account_holder === ''
  ) {
    fifthHolderSpouseFailedFields = {
      ...fifthHolderSpouseFailedFields,
      lname_spouse_fifth_account_holder: 'Last Name is empty or invalid',
    };
  }

  return fifthHolderSpouseFailedFields;
};

export default FifthHolderSpouseValidations;
