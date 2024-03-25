const ThirdHolderSpouseValidations = (formData) => {
  let thrdHolderSpouseFailedFields = {};

  if (
    !formData.title_spouse_thrd_account_holder ||
    formData.title_spouse_thrd_account_holder === ''
  ) {
    thrdHolderSpouseFailedFields = {
      ...thrdHolderSpouseFailedFields,
      title_spouse_thrd_account_holder: 'Title is empty or invalid',
    };
  }
  if (
    !formData.fname_spouse_thrd_account_holder ||
    formData.fname_spouse_thrd_account_holder === ''
  ) {
    thrdHolderSpouseFailedFields = {
      ...thrdHolderSpouseFailedFields,
      fname_spouse_thrd_account_holder: 'First Name is empty or invalid',
    };
  }
  if (
    !formData.lname_spouse_thrd_account_holder ||
    formData.lname_spouse_thrd_account_holder === ''
  ) {
    thrdHolderSpouseFailedFields = {
      ...thrdHolderSpouseFailedFields,
      lname_spouse_thrd_account_holder: 'Last Name is empty or invalid',
    };
  }

  return thrdHolderSpouseFailedFields;
};

export default ThirdHolderSpouseValidations;
