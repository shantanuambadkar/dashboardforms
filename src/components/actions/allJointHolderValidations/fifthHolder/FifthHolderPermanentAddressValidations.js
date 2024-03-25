const FifthHolderPermanentAddressValidations = (formData) => {
  let failedFifthHolderPermAddrFields = {};

  // Permanent Address fields
  if (
    !formData.perm_address_fifth_account_holder ||
    formData.perm_address_fifth_account_holder === ''
  ) {
    failedFifthHolderPermAddrFields = {
      ...failedFifthHolderPermAddrFields,
      perm_address_fifth_account_holder: 'Address is invalid or empty',
    };
  }
  if (
    !formData.perm_pin_fifth_account_holder ||
    formData.perm_pin_fifth_account_holder === '' ||
    formData.perm_pin_fifth_account_holder.length !== 6
  ) {
    failedFifthHolderPermAddrFields = {
      ...failedFifthHolderPermAddrFields,
      perm_pin_fifth_account_holder: 'PIN is invalid or empty',
    };
  } else {
    const pin_Number = Number(formData.perm_pin_fifth_account_holder);
    if (pin_Number === 0) {
      failedFifthHolderPermAddrFields = {
        ...failedFifthHolderPermAddrFields,
        perm_pin_fifth_account_holder: 'PIN is invalid',
      };
    }
  }
  if (
    !formData.perm_state_fifth_account_holder ||
    formData.perm_state_fifth_account_holder === ''
  ) {
    failedFifthHolderPermAddrFields = {
      ...failedFifthHolderPermAddrFields,
      perm_state_fifth_account_holder: 'State is invalid or empty',
    };
  }
  if (
    !formData.perm_country_fifth_account_holder ||
    formData.perm_country_fifth_account_holder === ''
  ) {
    failedFifthHolderPermAddrFields = {
      ...failedFifthHolderPermAddrFields,
      perm_country_fifth_account_holder: 'Country is invalid or empty',
    };
  }

  return failedFifthHolderPermAddrFields;
};

export default FifthHolderPermanentAddressValidations;
