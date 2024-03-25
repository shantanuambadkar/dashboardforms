const AddressValidations = (formData, formName, showPermAddress) => {
  var failedAddressFields = {};
  if (
    !formData.address_account_holder ||
    formData.address_account_holder === ''
  ) {
    failedAddressFields = {
      ...failedAddressFields,
      address_account_holder: true,
    };
  }
  if (
    !formData.pin_account_holder ||
    formData.pin_account_holder === '' ||
    (formData.pin_account_holder && formData.pin_account_holder.length !== 6)
  ) {
    failedAddressFields = {
      ...failedAddressFields,
      pin_account_holder: true,
    };
  }
  if (!formData.state_account_holder || formData.state_account_holder === '') {
    failedAddressFields = {
      ...failedAddressFields,
      state_account_holder: true,
    };
  }
  return failedAddressFields;
};

export default AddressValidations;
