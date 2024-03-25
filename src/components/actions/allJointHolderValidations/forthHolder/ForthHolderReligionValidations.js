const ForthHolderReligionValidations = (formData) => {
  let failedFieldsForthHolderReligion = {};

  if (
    !formData.religion_forth_account_holder ||
    formData.religion_forth_account_holder === ''
  ) {
    failedFieldsForthHolderReligion = {
      ...failedFieldsForthHolderReligion,
      religion_forth_account_holder: 'Religion is empty or invalid',
    };
  } else {
    if (
      formData.religion_forth_account_holder === 'OTHER' &&
      (!formData.other_religion_forth_account_holder ||
        formData.other_religion_forth_account_holder === '')
    ) {
      failedFieldsForthHolderReligion = {
        ...failedFieldsForthHolderReligion,
        other_religion_forth_account_holder:
          'Other Religion is empty or invalid',
      };
    }
  }

  return failedFieldsForthHolderReligion;
};

export default ForthHolderReligionValidations;
