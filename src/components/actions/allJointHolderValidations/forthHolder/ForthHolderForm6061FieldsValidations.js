const ForthHolderForm6061FieldsValidations = (formData) => {
  let forthHolderFailedForm6061Fields = {};

  if (
    (!formData.pan_forth_account_holder ||
      formData.pan_forth_account_holder === '') &&
    (!formData.form60_forth_account_holder ||
      !formData.form61_forth_account_holder)
  ) {
    forthHolderFailedForm6061Fields = {
      ...forthHolderFailedForm6061Fields,
      forthHolderform6061Fields: 'Form 60 / 61 details are invalid or empty',
    };
  }
  if (
    formData.form60_forth_account_holder &&
    (!formData.form60_name_forth_account_holder ||
      formData.form60_name_forth_account_holder === '' ||
      !formData.form60_address_forth_account_holder ||
      formData.form60_address_forth_account_holder === '')
  ) {
    forthHolderFailedForm6061Fields = {
      ...forthHolderFailedForm6061Fields,
      forthHolderForm60Fields:
        'An internal error occured while selecting Form 60. Please contact admin.',
    };
  }
  if (
    formData.form61_forth_account_holder &&
    (!formData.form61_name_forth_account_holder ||
      formData.form61_name_forth_account_holder === '' ||
      !formData.form61_address_forth_account_holder ||
      formData.form61_address_forth_account_holder === '')
  ) {
    forthHolderFailedForm6061Fields = {
      ...forthHolderFailedForm6061Fields,
      forthHolderForm61Fields:
        'An internal error occured while selecting Form 61. Please contact admin.',
    };
  }

  return forthHolderFailedForm6061Fields;
};

export default ForthHolderForm6061FieldsValidations;
