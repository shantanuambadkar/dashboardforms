const ThirdHolderMotherValidations = (formData) => {
  let thrdHolderMotherFailedFields = {};

  if (
    !formData.title_mother_thrd_account_holder ||
    formData.title_mother_thrd_account_holder === ''
  ) {
    thrdHolderMotherFailedFields = {
      ...thrdHolderMotherFailedFields,
      title_mother_thrd_account_holder: 'Title is empty or invalid',
    };
  }
  if (
    !formData.fname_mother_thrd_account_holder ||
    formData.fname_mother_thrd_account_holder === ''
  ) {
    thrdHolderMotherFailedFields = {
      ...thrdHolderMotherFailedFields,
      fname_mother_thrd_account_holder: 'First Name is empty or invalid',
    };
  }
  if (
    !formData.lname_mother_thrd_account_holder ||
    formData.lname_mother_thrd_account_holder === ''
  ) {
    thrdHolderMotherFailedFields = {
      ...thrdHolderMotherFailedFields,
      lname_mother_thrd_account_holder: 'Last Name is empty or invalid',
    };
  }

  return thrdHolderMotherFailedFields;
};

export default ThirdHolderMotherValidations;
