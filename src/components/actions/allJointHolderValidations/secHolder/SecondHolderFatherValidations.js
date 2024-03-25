const SecondHolderFatherValidations = (formData) => {
  let secHolderFatherFailedFields = {};

  if (
    !formData.title_father_scnd_account_holder ||
    formData.title_father_scnd_account_holder === ''
  ) {
    secHolderFatherFailedFields = {
      ...secHolderFatherFailedFields,
      title_father_scnd_account_holder: 'Title is empty or invalid',
    };
  }
  if (
    !formData.fname_father_scnd_account_holder ||
    formData.fname_father_scnd_account_holder === ''
  ) {
    secHolderFatherFailedFields = {
      ...secHolderFatherFailedFields,
      fname_father_scnd_account_holder: 'First Name is empty or invalid',
    };
  }
  if (
    !formData.lname_father_scnd_account_holder ||
    formData.lname_father_scnd_account_holder === ''
  ) {
    secHolderFatherFailedFields = {
      ...secHolderFatherFailedFields,
      lname_father_scnd_account_holder: 'Last Name is empty or invalid',
    };
  }

  return secHolderFatherFailedFields;
};

export default SecondHolderFatherValidations;
