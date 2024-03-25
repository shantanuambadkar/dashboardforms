const Form6061Validations = (formData) => {
  let failedForm6061Fields = {};
  if (
    (!formData.pan_account_holder || formData.pan_account_holder === '') &&
    (!formData.form60_fst_account_holder || !formData.form61_fst_account_holder)
  ) {
    failedForm6061Fields = {
      ...failedForm6061Fields,
      form6061Fields: 'Form 60 / 61 details are invalid or empty',
    };
  }
  if (
    formData.form60_fst_account_holder &&
    (!formData.form60_name_fst_account_holder ||
      formData.form60_name_fst_account_holder === '' ||
      !formData.form60_address_fst_account_holder ||
      formData.form60_address_fst_account_holder === '')
  ) {
    failedForm6061Fields = {
      ...failedForm6061Fields,
      form60Fields:
        'An internal error occured while selecting Form 60. Please contact admin.',
    };
  }
  if (
    formData.form61_fst_account_holder &&
    (!formData.form61_name_fst_account_holder ||
      formData.form61_name_fst_account_holder === '' ||
      !formData.form61_address_fst_account_holder ||
      formData.form61_address_fst_account_holder === '')
  ) {
    failedForm6061Fields = {
      ...failedForm6061Fields,
      form61Fields:
        'An internal error occured while selecting Form 61. Please contact admin.',
    };
  }

  return failedForm6061Fields;
};

export default Form6061Validations;
