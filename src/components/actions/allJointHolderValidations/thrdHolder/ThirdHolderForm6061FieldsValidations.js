const ThirdHolderForm6061FieldsValidations = (formData) => {
  let thrdHolderFailedForm6061Fields = {};

  if (
    (!formData.pan_thrd_account_holder ||
      formData.pan_thrd_account_holder === '') &&
    (!formData.form60_thrd_account_holder ||
      !formData.form61_thrd_account_holder)
  ) {
    thrdHolderFailedForm6061Fields = {
      ...thrdHolderFailedForm6061Fields,
      thrdHolderform6061Fields: 'Form 60 / 61 details are invalid or empty',
    };
  }
  if (
    formData.form60_thrd_account_holder &&
    (!formData.form60_name_thrd_account_holder ||
      formData.form60_name_thrd_account_holder === '' ||
      !formData.form60_address_thrd_account_holder ||
      formData.form60_address_thrd_account_holder === '')
  ) {
    thrdHolderFailedForm6061Fields = {
      ...thrdHolderFailedForm6061Fields,
      thrdHolderForm60Fields:
        'An internal error occured while selecting Form 60. Please contact admin.',
    };
  }
  if (
    formData.form61_thrd_account_holder &&
    (!formData.form61_name_thrd_account_holder ||
      formData.form61_name_thrd_account_holder === '' ||
      !formData.form61_address_thrd_account_holder ||
      formData.form61_address_thrd_account_holder === '')
  ) {
    thrdHolderFailedForm6061Fields = {
      ...thrdHolderFailedForm6061Fields,
      thrdHolderForm61Fields:
        'An internal error occured while selecting Form 61. Please contact admin.',
    };
  }

  return thrdHolderFailedForm6061Fields;
};

export default ThirdHolderForm6061FieldsValidations;
