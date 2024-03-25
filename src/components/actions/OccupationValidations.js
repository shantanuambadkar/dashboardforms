const OccupationValidations = (formData) => {
  let failedOccupationFields = {};

  if (
    !formData.occupation_fst_account_holder ||
    formData.occupation_fst_account_holder === ''
  ) {
    failedOccupationFields = {
      ...failedOccupationFields,
      occupation_fst_account_holder: 'Occupation is invalid or empty',
    };
  } else {
    if (
      formData.occupation_fst_account_holder === 'OTHER' &&
      (!formData.other_occupation_fst_account_holder ||
        formData.other_occupation_fst_account_holder === '')
    ) {
      failedOccupationFields = {
        ...failedOccupationFields,
        other_occupation_fst_account_holder:
          'Other Occupation is invalid or empty',
      };
    }
  }

  return failedOccupationFields;
};

export default OccupationValidations;
