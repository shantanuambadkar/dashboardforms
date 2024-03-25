const MotherFieldsValidations = (formData) => {
  let motherFields = {};

  if (
    !formData.title_mother_fst_account_holder ||
    formData.title_mother_fst_account_holder === ''
  ) {
    motherFields = {
      ...motherFields,
      title_mother_fst_account_holder: 'Title is invalid or empty',
    };
  }
  if (
    !formData.fname_mother_fst_account_holder ||
    formData.fname_mother_fst_account_holder === ''
  ) {
    motherFields = {
      ...motherFields,
      fname_mother_fst_account_holder: 'First Name is invalid or empty',
    };
  }
  if (
    !formData.lname_mother_fst_account_holder ||
    formData.lname_mother_fst_account_holder === ''
  ) {
    motherFields = {
      ...motherFields,
      lname_mother_fst_account_holder: 'Last Name is invalid or empty',
    };
  }

  return motherFields;
};

export default MotherFieldsValidations;
