const FifthHolderAddressValidations = (formData) => {
  let fifthHolderAddressFailedFields = {};

  // Corrospondence Address fields
  if (
    !formData.address_fifth_account_holder ||
    formData.address_fifth_account_holder === ''
  ) {
    fifthHolderAddressFailedFields = {
      ...fifthHolderAddressFailedFields,
      address_fifth_account_holder: 'Address is invalid or empty',
    };
  }
  if (
    !formData.pin_fifth_account_holder ||
    formData.pin_fifth_account_holder === '' ||
    formData.pin_fifth_account_holder.length !== 6
  ) {
    fifthHolderAddressFailedFields = {
      ...fifthHolderAddressFailedFields,
      pin_fifth_account_holder: 'PIN is invalid or empty',
    };
  } else {
    const pin_Number = Number(formData.pin_fifth_account_holder);
    if (pin_Number === 0) {
      fifthHolderAddressFailedFields = {
        ...fifthHolderAddressFailedFields,
        pin_fifth_account_holder: 'PIN is invalid',
      };
    }
  }
  if (
    !formData.state_fifth_account_holder ||
    formData.state_fifth_account_holder === ''
  ) {
    fifthHolderAddressFailedFields = {
      ...fifthHolderAddressFailedFields,
      state_fifth_account_holder: 'State is invalid or empty',
    };
  }
  if (
    !formData.country_fifth_account_holder ||
    formData.country_fifth_account_holder === ''
  ) {
    fifthHolderAddressFailedFields = {
      ...fifthHolderAddressFailedFields,
      country_fifth_account_holder: 'Country is invalid or empty',
    };
  }

  return fifthHolderAddressFailedFields;
};

export default FifthHolderAddressValidations;
