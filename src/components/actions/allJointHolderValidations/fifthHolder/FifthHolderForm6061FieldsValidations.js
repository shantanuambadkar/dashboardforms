const FifthHolderForm6061FieldsValidations = (formData) => {
  let fifthHolderFailedForm6061Fields = {};

  if (
    (!formData.pan_fifth_account_holder ||
      formData.pan_fifth_account_holder === '') &&
    (!formData.form60_fifth_account_holder ||
      !formData.form61_fifth_account_holder)
  ) {
    fifthHolderFailedForm6061Fields = {
      ...fifthHolderFailedForm6061Fields,
      fifthHolderform6061Fields: 'Form 60 / 61 details are invalid or empty',
    };
  }
  if (
    formData.form60_fifth_account_holder &&
    (!formData.form60_name_fifth_account_holder ||
      formData.form60_name_fifth_account_holder === '' ||
      !formData.form60_address_fifth_account_holder ||
      formData.form60_address_fifth_account_holder === '')
  ) {
    fifthHolderFailedForm6061Fields = {
      ...fifthHolderFailedForm6061Fields,
      fifthHolderForm60Fields:
        'An internal error occured while selecting Form 60. Please contact admin.',
    };
  }
  if (
    formData.form61_fifth_account_holder &&
    (!formData.form61_name_fifth_account_holder ||
      formData.form61_name_fifth_account_holder === '' ||
      !formData.form61_address_fifth_account_holder ||
      formData.form61_address_fifth_account_holder === '')
  ) {
    fifthHolderFailedForm6061Fields = {
      ...fifthHolderFailedForm6061Fields,
      fifthHolderForm61Fields:
        'An internal error occured while selecting Form 61. Please contact admin.',
    };
  }

  return fifthHolderFailedForm6061Fields;
};

export default FifthHolderForm6061FieldsValidations;
