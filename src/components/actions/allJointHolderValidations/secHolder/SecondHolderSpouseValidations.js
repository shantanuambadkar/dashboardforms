const SecondHolderSpouseValidations = (formData) => {
  let secHolderSpouseFailedFields = {};

  if (
    !formData.title_spouse_scnd_account_holder ||
    formData.title_spouse_scnd_account_holder === ''
  ) {
    secHolderSpouseFailedFields = {
      ...secHolderSpouseFailedFields,
      title_spouse_scnd_account_holder: 'Title is empty or invalid',
    };
  }
  if (
    !formData.fname_spouse_scnd_account_holder ||
    formData.fname_spouse_scnd_account_holder === ''
  ) {
    secHolderSpouseFailedFields = {
      ...secHolderSpouseFailedFields,
      fname_spouse_scnd_account_holder: 'First Name is empty or invalid',
    };
  }
  if (
    !formData.lname_spouse_scnd_account_holder ||
    formData.lname_spouse_scnd_account_holder === ''
  ) {
    secHolderSpouseFailedFields = {
      ...secHolderSpouseFailedFields,
      lname_spouse_scnd_account_holder: 'Last Name is empty or invalid',
    };
  }

  return secHolderSpouseFailedFields;
};

export default SecondHolderSpouseValidations;
