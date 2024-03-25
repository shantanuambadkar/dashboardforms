const ForthHolderGenderValidations = (formData) => {
  let failedForthHolderGenderFields = {};

  if (
    !formData.gender_forth_account_holder ||
    formData.gender_forth_account_holder === ''
  ) {
    failedForthHolderGenderFields = {
      ...failedForthHolderGenderFields,
      gender_forth_account_holder: 'Gender is invalid or empty',
    };
  }

  return failedForthHolderGenderFields;
};

export default ForthHolderGenderValidations;
