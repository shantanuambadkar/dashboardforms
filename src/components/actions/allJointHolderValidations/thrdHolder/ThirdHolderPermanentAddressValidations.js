const ThirdHolderPermanentAddressValidations = (formData) => {
  let failedThrdHolderPermAddrFields = {};

  // Permanent Address fields
  if (
    !formData.perm_address_thrd_account_holder ||
    formData.perm_address_thrd_account_holder === ''
  ) {
    failedThrdHolderPermAddrFields = {
      ...failedThrdHolderPermAddrFields,
      perm_address_thrd_account_holder: 'Address is invalid or empty',
    };
  }
  if (
    !formData.perm_pin_thrd_account_holder ||
    formData.perm_pin_thrd_account_holder === '' ||
    formData.perm_pin_thrd_account_holder.length !== 6
  ) {
    failedThrdHolderPermAddrFields = {
      ...failedThrdHolderPermAddrFields,
      perm_pin_thrd_account_holder: 'PIN is invalid or empty',
    };
  } else {
    const pin_Number = Number(formData.perm_pin_thrd_account_holder);
    if (pin_Number === 0) {
      failedThrdHolderPermAddrFields = {
        ...failedThrdHolderPermAddrFields,
        perm_pin_thrd_account_holder: 'PIN is invalid',
      };
    }
  }
  if (
    !formData.perm_state_thrd_account_holder ||
    formData.perm_state_thrd_account_holder === ''
  ) {
    failedThrdHolderPermAddrFields = {
      ...failedThrdHolderPermAddrFields,
      perm_state_thrd_account_holder: 'State is invalid or empty',
    };
  }
  if (
    !formData.perm_country_thrd_account_holder ||
    formData.perm_country_thrd_account_holder === ''
  ) {
    failedThrdHolderPermAddrFields = {
      ...failedThrdHolderPermAddrFields,
      perm_country_thrd_account_holder: 'Country is invalid or empty',
    };
  }

  return failedThrdHolderPermAddrFields;
};

export default ThirdHolderPermanentAddressValidations;
