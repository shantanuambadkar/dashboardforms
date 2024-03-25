const SecondHolderGenderValidations = (formData) => {
  let failedSecondHolderGenderFields = {};

  if (
    !formData.gender_scnd_account_holder ||
    formData.gender_scnd_account_holder === ''
  ) {
    failedSecondHolderGenderFields = {
      ...failedSecondHolderGenderFields,
      gender_scnd_account_holder: 'Gender is invalid or empty',
    };
  }

  return failedSecondHolderGenderFields;
};

export default SecondHolderGenderValidations;
