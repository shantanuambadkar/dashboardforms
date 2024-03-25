const SecondHolderReligionValidations = (formData) => {
  let failedFieldsSecHolderReligion = {};

  if (
    !formData.religion_scnd_account_holder ||
    formData.religion_scnd_account_holder === ''
  ) {
    failedFieldsSecHolderReligion = {
      ...failedFieldsSecHolderReligion,
      religion_scnd_account_holder: 'Religion is empty or invalid',
    };
  } else {
    if (
      formData.religion_scnd_account_holder === 'OTHER' &&
      (!formData.other_religion_scnd_account_holder ||
        formData.other_religion_scnd_account_holder === '')
    ) {
      failedFieldsSecHolderReligion = {
        ...failedFieldsSecHolderReligion,
        other_religion_scnd_account_holder:
          'Other Religion is empty or invalid',
      };
    }
  }

  return failedFieldsSecHolderReligion;
};

export default SecondHolderReligionValidations;
