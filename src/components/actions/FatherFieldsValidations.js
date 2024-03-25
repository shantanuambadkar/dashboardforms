const FatherFieldsValidations = (formData) => {
  let fatherFields = {};

  if (
    !formData.title_father_fst_account_holder ||
    formData.title_father_fst_account_holder === ''
  ) {
    fatherFields = {
      ...fatherFields,
      title_father_fst_account_holder: 'Title is invalid or empty',
    };
  }
  if (
    !formData.fname_father_fst_account_holder ||
    formData.fname_father_fst_account_holder === ''
  ) {
    fatherFields = {
      ...fatherFields,
      fname_father_fst_account_holder: 'First Name is invalid or empty',
    };
  }
  if (
    !formData.lname_father_fst_account_holder ||
    formData.lname_father_fst_account_holder === ''
  ) {
    fatherFields = {
      ...fatherFields,
      lname_father_fst_account_holder: 'Last Name is invalid or empty',
    };
  }

  return fatherFields;
};

export default FatherFieldsValidations;
