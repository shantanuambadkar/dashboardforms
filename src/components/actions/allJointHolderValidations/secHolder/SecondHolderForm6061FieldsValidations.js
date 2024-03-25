const SecondHolderForm6061FieldsValidations = (formData) => {
  let secHolderFailedForm6061Fields = {};

  if (
    (!formData.pan_scnd_account_holder ||
      formData.pan_scnd_account_holder === '') &&
    (!formData.form60_scnd_account_holder ||
      !formData.form61_scnd_account_holder)
  ) {
    secHolderFailedForm6061Fields = {
      ...secHolderFailedForm6061Fields,
      secHolderform6061Fields: 'Form 60 / 61 details are invalid or empty',
    };
  }
  if (
    formData.form60_scnd_account_holder &&
    (!formData.form60_name_scnd_account_holder ||
      formData.form60_name_scnd_account_holder === '' ||
      !formData.form60_address_scnd_account_holder ||
      formData.form60_address_scnd_account_holder === '')
  ) {
    secHolderFailedForm6061Fields = {
      ...secHolderFailedForm6061Fields,
      secHolderForm60Fields:
        'An internal error occured while selecting Form 60. Please contact admin.',
    };
  }
  if (
    formData.form61_scnd_account_holder &&
    (!formData.form61_name_scnd_account_holder ||
      formData.form61_name_scnd_account_holder === '' ||
      !formData.form61_address_scnd_account_holder ||
      formData.form61_address_scnd_account_holder === '')
  ) {
    secHolderFailedForm6061Fields = {
      ...secHolderFailedForm6061Fields,
      secHolderForm61Fields:
        'An internal error occured while selecting Form 61. Please contact admin.',
    };
  }

  return secHolderFailedForm6061Fields;
};

export default SecondHolderForm6061FieldsValidations;
