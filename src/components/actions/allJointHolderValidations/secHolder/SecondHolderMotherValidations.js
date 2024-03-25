const SecondHolderMotherValidations = (formData) => {
  let secHolderMotherFailedFields = {};

  if (
    !formData.title_mother_scnd_account_holder ||
    formData.title_mother_scnd_account_holder === ''
  ) {
    secHolderMotherFailedFields = {
      ...secHolderMotherFailedFields,
      title_mother_scnd_account_holder: 'Title is empty or invalid',
    };
  }
  if (
    !formData.fname_mother_scnd_account_holder ||
    formData.fname_mother_scnd_account_holder === ''
  ) {
    secHolderMotherFailedFields = {
      ...secHolderMotherFailedFields,
      fname_mother_scnd_account_holder: 'First Name is empty or invalid',
    };
  }
  if (
    !formData.lname_mother_scnd_account_holder ||
    formData.lname_mother_scnd_account_holder === ''
  ) {
    secHolderMotherFailedFields = {
      ...secHolderMotherFailedFields,
      lname_mother_scnd_account_holder: 'Last Name is empty or invalid',
    };
  }

  return secHolderMotherFailedFields;
};

export default SecondHolderMotherValidations;
