const SecondHolderOccupationValidations = (formData) => {
  let secHolderOccupationFailedFields = {};

  if (
    !formData.occupation_scnd_account_holder ||
    formData.occupation_scnd_account_holder === ''
  ) {
    secHolderOccupationFailedFields = {
      ...secHolderOccupationFailedFields,
      occupation_scnd_account_holder: 'Occupation is empty or invalid',
    };
  } else {
    if (
      formData.occupation_scnd_account_holder === 'OTHER' &&
      (!formData.other_occupation_scnd_account_holder ||
        formData.other_occupation_scnd_account_holder === '')
    ) {
      secHolderOccupationFailedFields = {
        ...secHolderOccupationFailedFields,
        other_occupation_scnd_account_holder:
          'Other Occupation is empty or invalid',
      };
    }
  }
  return secHolderOccupationFailedFields;
};

export default SecondHolderOccupationValidations;
