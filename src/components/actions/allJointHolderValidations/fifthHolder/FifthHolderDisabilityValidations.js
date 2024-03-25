const FifthHolderDisabilityValidations = (formData) => {
  let failedFifthHolderDisabilityFields = {};

  if (
    !formData.disability_fifth_account_holder ||
    formData.disability_fifth_account_holder === ''
  ) {
    failedFifthHolderDisabilityFields = {
      ...failedFifthHolderDisabilityFields,
      disability_fifth_account_holder: 'Disability is empty or invalid',
    };
  } else {
    if (
      formData.disability_fifth_account_holder === 'YES' &&
      (!formData.disability_details_fifth_account_holder ||
        formData.disability_details_fifth_account_holder === '')
    ) {
      failedFifthHolderDisabilityFields = {
        ...failedFifthHolderDisabilityFields,
        disability_details_fifth_account_holder:
          'Disability Details is empty or invalid',
      };
    }
  }

  return failedFifthHolderDisabilityFields;
};

export default FifthHolderDisabilityValidations;
