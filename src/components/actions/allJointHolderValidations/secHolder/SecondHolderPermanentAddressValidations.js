const SecondHolderPermanentAddressValidations = (formData) => {
  let failedSecHolderPermAddrFields = {};

  // Permanent Address fields
  if (
    !formData.perm_address_scnd_account_holder ||
    formData.perm_address_scnd_account_holder === ''
  ) {
    failedSecHolderPermAddrFields = {
      ...failedSecHolderPermAddrFields,
      perm_address_scnd_account_holder: 'Address is invalid or empty',
    };
  }
  if (
    !formData.perm_pin_scnd_account_holder ||
    formData.perm_pin_scnd_account_holder === '' ||
    formData.perm_pin_scnd_account_holder.length !== 6
  ) {
    failedSecHolderPermAddrFields = {
      ...failedSecHolderPermAddrFields,
      perm_pin_scnd_account_holder: 'PIN is invalid or empty',
    };
  } else {
    const pin_Number = Number(formData.perm_pin_scnd_account_holder);
    if (pin_Number === 0) {
      failedSecHolderPermAddrFields = {
        ...failedSecHolderPermAddrFields,
        perm_pin_scnd_account_holder: 'PIN is invalid',
      };
    }
  }
  if (
    !formData.perm_state_scnd_account_holder ||
    formData.perm_state_scnd_account_holder === ''
  ) {
    failedSecHolderPermAddrFields = {
      ...failedSecHolderPermAddrFields,
      perm_state_scnd_account_holder: 'State is invalid or empty',
    };
  }
  if (
    !formData.perm_country_scnd_account_holder ||
    formData.perm_country_scnd_account_holder === ''
  ) {
    failedSecHolderPermAddrFields = {
      ...failedSecHolderPermAddrFields,
      perm_country_scnd_account_holder: 'Country is invalid or empty',
    };
  }

  return failedSecHolderPermAddrFields;
};

export default SecondHolderPermanentAddressValidations;
