const ReligionValidations = (formData) => {
  let failedReligionFields = {};

  if (
    !formData.religion_fst_account_holder ||
    formData.religion_fst_account_holder === ''
  ) {
    failedReligionFields = {
      ...failedReligionFields,
      religion_fst_account_holder: 'Religion is invalid or empty',
    };
  } else {
    if (
      formData.religion_fst_account_holder === 'OTHER' &&
      (!formData.other_religion_fst_account_holder ||
        formData.other_religion_fst_account_holder === '')
    ) {
      failedReligionFields = {
        ...failedReligionFields,
        other_religion_fst_account_holder: 'Other Religion is invalid or empty',
      };
    }
  }

  return failedReligionFields;
};

export default ReligionValidations;
