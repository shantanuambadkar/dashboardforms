const FifthHolderGenderValidations = (formData) => {
  let failedFifthHolderGenderFields = {};

  if (
    !formData.gender_fifth_account_holder ||
    formData.gender_fifth_account_holder === ''
  ) {
    failedFifthHolderGenderFields = {
      ...failedFifthHolderGenderFields,
      gender_fifth_account_holder: 'Gender is invalid or empty',
    };
  }

  return failedFifthHolderGenderFields;
};

export default FifthHolderGenderValidations;
