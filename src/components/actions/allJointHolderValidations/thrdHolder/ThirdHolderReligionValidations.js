const ThirdHolderReligionValidations = (formData) => {
  let failedFieldsThrdHolderReligion = {};

  if (
    !formData.religion_thrd_account_holder ||
    formData.religion_thrd_account_holder === ''
  ) {
    failedFieldsThrdHolderReligion = {
      ...failedFieldsThrdHolderReligion,
      religion_thrd_account_holder: 'Religion is empty or invalid',
    };
  } else {
    if (
      formData.religion_thrd_account_holder === 'OTHER' &&
      (!formData.other_religion_thrd_account_holder ||
        formData.other_religion_thrd_account_holder === '')
    ) {
      failedFieldsThrdHolderReligion = {
        ...failedFieldsThrdHolderReligion,
        other_religion_thrd_account_holder:
          'Other Religion is empty or invalid',
      };
    }
  }

  return failedFieldsThrdHolderReligion;
};

export default ThirdHolderReligionValidations;
