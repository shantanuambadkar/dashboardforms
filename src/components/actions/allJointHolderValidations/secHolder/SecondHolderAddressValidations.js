const SecondHolderAddressValidations = (formData) => {
  let secondHolderAddressFailedFields = {};

  // Corrospondence Address fields
  if (
    !formData.address_scnd_account_holder ||
    formData.address_scnd_account_holder === ''
  ) {
    secondHolderAddressFailedFields = {
      ...secondHolderAddressFailedFields,
      address_scnd_account_holder: 'Address is invalid or empty',
    };
  }
  if (
    !formData.pin_scnd_account_holder ||
    formData.pin_scnd_account_holder === '' ||
    formData.pin_scnd_account_holder.length !== 6
  ) {
    secondHolderAddressFailedFields = {
      ...secondHolderAddressFailedFields,
      pin_scnd_account_holder: 'PIN is invalid or empty',
    };
  } else {
    const pin_Number = Number(formData.pin_scnd_account_holder);
    if (pin_Number === 0) {
      secondHolderAddressFailedFields = {
        ...secondHolderAddressFailedFields,
        pin_scnd_account_holder: 'PIN is invalid',
      };
    }
  }
  if (
    !formData.state_scnd_account_holder ||
    formData.state_scnd_account_holder === ''
  ) {
    secondHolderAddressFailedFields = {
      ...secondHolderAddressFailedFields,
      state_scnd_account_holder: 'State is invalid or empty',
    };
  }
  if (
    !formData.country_scnd_account_holder ||
    formData.country_scnd_account_holder === ''
  ) {
    secondHolderAddressFailedFields = {
      ...secondHolderAddressFailedFields,
      country_scnd_account_holder: 'Country is invalid or empty',
    };
  }

  return secondHolderAddressFailedFields;
};

export default SecondHolderAddressValidations;
