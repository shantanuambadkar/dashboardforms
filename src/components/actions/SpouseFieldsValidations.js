const SpouseFieldsValidations = (formData) => {
  let spouseFields = {};

  if (
    !formData.title_spouse_fst_account_holder ||
    formData.title_spouse_fst_account_holder === ''
  ) {
    spouseFields = {
      ...spouseFields,
      title_spouse_fst_account_holder: 'Title is invalid or empty',
    };
  }
  if (
    !formData.fname_spouse_fst_account_holder ||
    formData.fname_spouse_fst_account_holder === ''
  ) {
    spouseFields = {
      ...spouseFields,
      fname_spouse_fst_account_holder: 'First Name is invalid or empty',
    };
  }
  if (
    !formData.lname_spouse_fst_account_holder ||
    formData.lname_spouse_fst_account_holder === ''
  ) {
    spouseFields = {
      ...spouseFields,
      lname_spouse_fst_account_holder: 'Last Name is invalid or empty',
    };
  }

  return spouseFields;
};

export default SpouseFieldsValidations;
