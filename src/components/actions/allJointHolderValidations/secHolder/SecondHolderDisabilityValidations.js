const SecondHolderDisabilityValidations = (formData) => {
  let failedSecHolderDisabilityFields = {};

  if (
    !formData.disability_scnd_account_holder ||
    formData.disability_scnd_account_holder === ''
  ) {
    failedSecHolderDisabilityFields = {
      ...failedSecHolderDisabilityFields,
      disability_scnd_account_holder: 'Disability is empty or invalid',
    };
  } else {
    if (
      formData.disability_scnd_account_holder === 'YES' &&
      (!formData.disability_details_scnd_account_holder ||
        formData.disability_details_scnd_account_holder === '')
    ) {
      failedSecHolderDisabilityFields = {
        ...failedSecHolderDisabilityFields,
        disability_details_scnd_account_holder:
          'Disability Details is empty or invalid',
      };
    }
  }

  return failedSecHolderDisabilityFields;
};

export default SecondHolderDisabilityValidations;
