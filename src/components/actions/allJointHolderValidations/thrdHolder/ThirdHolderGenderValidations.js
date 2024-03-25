const ThirdHolderGenderValidations = (formData) => {
  let failedThirdHolderGenderFields = {};

  if (
    !formData.gender_thrd_account_holder ||
    formData.gender_thrd_account_holder === ''
  ) {
    failedThirdHolderGenderFields = {
      ...failedThirdHolderGenderFields,
      gender_thrd_account_holder: 'Gender is invalid or empty',
    };
  }

  return failedThirdHolderGenderFields;
};

export default ThirdHolderGenderValidations;
