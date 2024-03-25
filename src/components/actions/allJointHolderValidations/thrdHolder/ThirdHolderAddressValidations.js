const ThirdHolderAddressValidations = (formData) => {
  let thirdHolderAddressFailedFields = {};

  // Corrospondence Address fields
  if (
    !formData.address_thrd_account_holder ||
    formData.address_thrd_account_holder === ''
  ) {
    thirdHolderAddressFailedFields = {
      ...thirdHolderAddressFailedFields,
      address_thrd_account_holder: 'Address is invalid or empty',
    };
  }
  if (
    !formData.pin_thrd_account_holder ||
    formData.pin_thrd_account_holder === '' ||
    formData.pin_thrd_account_holder.length !== 6
  ) {
    thirdHolderAddressFailedFields = {
      ...thirdHolderAddressFailedFields,
      pin_thrd_account_holder: 'PIN is invalid or empty',
    };
  } else {
    const pin_Number = Number(formData.pin_thrd_account_holder);
    if (pin_Number === 0) {
      thirdHolderAddressFailedFields = {
        ...thirdHolderAddressFailedFields,
        pin_thrd_account_holder: 'PIN is invalid',
      };
    }
  }
  if (
    !formData.state_thrd_account_holder ||
    formData.state_thrd_account_holder === ''
  ) {
    thirdHolderAddressFailedFields = {
      ...thirdHolderAddressFailedFields,
      state_thrd_account_holder: 'State is invalid or empty',
    };
  }
  if (
    !formData.country_thrd_account_holder ||
    formData.country_thrd_account_holder === ''
  ) {
    thirdHolderAddressFailedFields = {
      ...thirdHolderAddressFailedFields,
      country_thrd_account_holder: 'Country is invalid or empty',
    };
  }

  return thirdHolderAddressFailedFields;
};

export default ThirdHolderAddressValidations;
