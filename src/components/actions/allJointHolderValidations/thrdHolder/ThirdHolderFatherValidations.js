const ThirdHolderFatherValidations = (formData) => {
  let thrdHolderFatherFailedFields = {};

  if (
    !formData.title_father_thrd_account_holder ||
    formData.title_father_thrd_account_holder === ''
  ) {
    thrdHolderFatherFailedFields = {
      ...thrdHolderFatherFailedFields,
      title_father_thrd_account_holder: 'Title is empty or invalid',
    };
  }
  if (
    !formData.fname_father_thrd_account_holder ||
    formData.fname_father_thrd_account_holder === ''
  ) {
    thrdHolderFatherFailedFields = {
      ...thrdHolderFatherFailedFields,
      fname_father_thrd_account_holder: 'First Name is empty or invalid',
    };
  }
  if (
    !formData.lname_father_thrd_account_holder ||
    formData.lname_father_thrd_account_holder === ''
  ) {
    thrdHolderFatherFailedFields = {
      ...thrdHolderFatherFailedFields,
      lname_father_thrd_account_holder: 'Last Name is empty or invalid',
    };
  }

  return thrdHolderFatherFailedFields;
};

export default ThirdHolderFatherValidations;
