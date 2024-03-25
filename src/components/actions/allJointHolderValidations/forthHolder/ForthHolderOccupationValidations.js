const ForthHolderOccupationValidations = (formData) => {
  let forthHolderOccupationFailedFields = {};

  if (
    !formData.occupation_forth_account_holder ||
    formData.occupation_forth_account_holder === ''
  ) {
    forthHolderOccupationFailedFields = {
      ...forthHolderOccupationFailedFields,
      occupation_forth_account_holder: 'Occupation is empty or invalid',
    };
  } else {
    if (
      formData.occupation_forth_account_holder === 'OTHER' &&
      (!formData.other_occupation_forth_account_holder ||
        formData.other_occupation_forth_account_holder === '')
    ) {
      forthHolderOccupationFailedFields = {
        ...forthHolderOccupationFailedFields,
        other_occupation_forth_account_holder:
          'Other Occupation is empty or invalid',
      };
    }
  }
  return forthHolderOccupationFailedFields;
};

export default ForthHolderOccupationValidations;
