const ThirdHolderDisabilityValidations = (formData) => {
  let failedThrdHolderDisabilityFields = {};

  if (
    !formData.disability_thrd_account_holder ||
    formData.disability_thrd_account_holder === ''
  ) {
    failedThrdHolderDisabilityFields = {
      ...failedThrdHolderDisabilityFields,
      disability_thrd_account_holder: 'Disability is empty or invalid',
    };
  } else {
    if (
      formData.disability_thrd_account_holder === 'YES' &&
      (!formData.disability_details_thrd_account_holder ||
        formData.disability_details_thrd_account_holder === '')
    ) {
      failedThrdHolderDisabilityFields = {
        ...failedThrdHolderDisabilityFields,
        disability_details_thrd_account_holder:
          'Disability Details is empty or invalid',
      };
    }
  }

  return failedThrdHolderDisabilityFields;
};

export default ThirdHolderDisabilityValidations;
