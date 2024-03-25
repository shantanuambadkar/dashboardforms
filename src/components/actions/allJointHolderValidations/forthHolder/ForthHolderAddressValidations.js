const ForthHolderAddressValidations = (formData) => {
  let forthHolderAddressFailedFields = {};

  // Corrospondence Address fields
  if (
    !formData.address_forth_account_holder ||
    formData.address_forth_account_holder === ''
  ) {
    forthHolderAddressFailedFields = {
      ...forthHolderAddressFailedFields,
      address_forth_account_holder: 'Address is invalid or empty',
    };
  }
  if (
    !formData.pin_forth_account_holder ||
    formData.pin_forth_account_holder === '' ||
    formData.pin_forth_account_holder.length !== 6
  ) {
    forthHolderAddressFailedFields = {
      ...forthHolderAddressFailedFields,
      pin_forth_account_holder: 'PIN is invalid or empty',
    };
  } else {
    const pin_Number = Number(formData.pin_forth_account_holder);
    if (pin_Number === 0) {
      forthHolderAddressFailedFields = {
        ...forthHolderAddressFailedFields,
        pin_forth_account_holder: 'PIN is invalid',
      };
    }
  }
  if (
    !formData.state_forth_account_holder ||
    formData.state_forth_account_holder === ''
  ) {
    forthHolderAddressFailedFields = {
      ...forthHolderAddressFailedFields,
      state_forth_account_holder: 'State is invalid or empty',
    };
  }
  if (
    !formData.country_forth_account_holder ||
    formData.country_forth_account_holder === ''
  ) {
    forthHolderAddressFailedFields = {
      ...forthHolderAddressFailedFields,
      country_forth_account_holder: 'Country is invalid or empty',
    };
  }

  return forthHolderAddressFailedFields;
};

export default ForthHolderAddressValidations;
