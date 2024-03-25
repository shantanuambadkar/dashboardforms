const FifthHolderReligionValidations = (formData) => {
  let failedFieldsFifthHolderReligion = {};

  if (
    !formData.religion_fifth_account_holder ||
    formData.religion_fifth_account_holder === ''
  ) {
    failedFieldsFifthHolderReligion = {
      ...failedFieldsFifthHolderReligion,
      religion_fifth_account_holder: 'Religion is empty or invalid',
    };
  } else {
    if (
      formData.religion_fifth_account_holder === 'OTHER' &&
      (!formData.other_religion_fifth_account_holder ||
        formData.other_religion_fifth_account_holder === '')
    ) {
      failedFieldsFifthHolderReligion = {
        ...failedFieldsFifthHolderReligion,
        other_religion_fifth_account_holder:
          'Other Religion is empty or invalid',
      };
    }
  }

  return failedFieldsFifthHolderReligion;
};

export default FifthHolderReligionValidations;
