const MaritalStatusValidations = (formData) => {
  let failedMaritalStatusFields = {};

  if (
    !formData.marital_status_fst_account_holder ||
    formData.marital_status_fst_account_holder === ''
  ) {
    failedMaritalStatusFields = {
      ...failedMaritalStatusFields,
      marital_status_fst_account_holder: 'Marital Status is empty or invalid',
    };
  }

  return failedMaritalStatusFields;
};

export default MaritalStatusValidations;
