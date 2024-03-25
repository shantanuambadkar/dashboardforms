const ForthHolderDisabilityValidations = (formData) => {
  let failedForthHolderDisabilityFields = {};

  if (
    !formData.disability_forth_account_holder ||
    formData.disability_forth_account_holder === ''
  ) {
    failedForthHolderDisabilityFields = {
      ...failedForthHolderDisabilityFields,
      disability_forth_account_holder: 'Disability is empty or invalid',
    };
  } else {
    if (
      formData.disability_forth_account_holder === 'YES' &&
      (!formData.disability_details_forth_account_holder ||
        formData.disability_details_forth_account_holder === '')
    ) {
      failedForthHolderDisabilityFields = {
        ...failedForthHolderDisabilityFields,
        disability_details_forth_account_holder:
          'Disability Details is empty or invalid',
      };
    }
  }

  return failedForthHolderDisabilityFields;
};

export default ForthHolderDisabilityValidations;
