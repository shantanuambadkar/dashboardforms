const DisabilityValidations = (formData) => {
  let failedDisabilityFields = {};

  if (
    !formData.disability_account_holder ||
    formData.disability_account_holder === ''
  ) {
    failedDisabilityFields = {
      ...failedDisabilityFields,
      disability_account_holder: 'Disability is empty or invalid',
    };
  }
  if (
    formData.disability_account_holder &&
    formData.disability_account_holder === 'YES' &&
    (!formData.disability_details_account_holder ||
      formData.disability_details_account_holder === '')
  ) {
    failedDisabilityFields = {
      ...failedDisabilityFields,
      disability_details_account_holder:
        'Disability Details is empty or invalid',
    };
  }

  return failedDisabilityFields;
};

export default DisabilityValidations;
