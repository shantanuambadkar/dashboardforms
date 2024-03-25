const FifthHolderOccupationValidations = (formData) => {
  let fifthHolderOccupationFailedFields = {};

  if (
    !formData.occupation_fifth_account_holder ||
    formData.occupation_fifth_account_holder === ''
  ) {
    fifthHolderOccupationFailedFields = {
      ...fifthHolderOccupationFailedFields,
      occupation_fifth_account_holder: 'Occupation is empty or invalid',
    };
  } else {
    if (
      formData.occupation_fifth_account_holder === 'OTHER' &&
      (!formData.other_occupation_fifth_account_holder ||
        formData.other_occupation_fifth_account_holder === '')
    ) {
      fifthHolderOccupationFailedFields = {
        ...fifthHolderOccupationFailedFields,
        other_occupation_fifth_account_holder:
          'Other Occupation is empty or invalid',
      };
    }
  }
  return fifthHolderOccupationFailedFields;
};

export default FifthHolderOccupationValidations;
