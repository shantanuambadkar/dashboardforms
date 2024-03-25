const ForthHolderPermanentAddressValidations = (formData) => {
  let failedForthHolderPermAddrFields = {};

  // Permanent Address fields
  if (
    !formData.perm_address_forth_account_holder ||
    formData.perm_address_forth_account_holder === ''
  ) {
    failedForthHolderPermAddrFields = {
      ...failedForthHolderPermAddrFields,
      perm_address_forth_account_holder: 'Address is invalid or empty',
    };
  }
  if (
    !formData.perm_pin_forth_account_holder ||
    formData.perm_pin_forth_account_holder === '' ||
    formData.perm_pin_forth_account_holder.length !== 6
  ) {
    failedForthHolderPermAddrFields = {
      ...failedForthHolderPermAddrFields,
      perm_pin_forth_account_holder: 'PIN is invalid or empty',
    };
  } else {
    const pin_Number = Number(formData.perm_pin_forth_account_holder);
    if (pin_Number === 0) {
      failedForthHolderPermAddrFields = {
        ...failedForthHolderPermAddrFields,
        perm_pin_forth_account_holder: 'PIN is invalid',
      };
    }
  }
  if (
    !formData.perm_state_forth_account_holder ||
    formData.perm_state_forth_account_holder === ''
  ) {
    failedForthHolderPermAddrFields = {
      ...failedForthHolderPermAddrFields,
      perm_state_forth_account_holder: 'State is invalid or empty',
    };
  }
  if (
    !formData.perm_country_forth_account_holder ||
    formData.perm_country_forth_account_holder === ''
  ) {
    failedForthHolderPermAddrFields = {
      ...failedForthHolderPermAddrFields,
      perm_country_forth_account_holder: 'Country is invalid or empty',
    };
  }

  return failedForthHolderPermAddrFields;
};

export default ForthHolderPermanentAddressValidations;
