const ThirdHolderOccupationValidations = (formData) => {
  let thrdHolderOccupationFailedFields = {};

  if (
    !formData.occupation_thrd_account_holder ||
    formData.occupation_thrd_account_holder === ''
  ) {
    thrdHolderOccupationFailedFields = {
      ...thrdHolderOccupationFailedFields,
      occupation_thrd_account_holder: 'Occupation is empty or invalid',
    };
  } else {
    if (
      formData.occupation_thrd_account_holder === 'OTHER' &&
      (!formData.other_occupation_thrd_account_holder ||
        formData.other_occupation_thrd_account_holder === '')
    ) {
      thrdHolderOccupationFailedFields = {
        ...thrdHolderOccupationFailedFields,
        other_occupation_thrd_account_holder:
          'Other Occupation is empty or invalid',
      };
    }
  }
  return thrdHolderOccupationFailedFields;
};

export default ThirdHolderOccupationValidations;
