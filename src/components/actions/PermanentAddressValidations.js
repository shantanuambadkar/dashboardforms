const PermanentAddressValidations = (formData) => {
  let permanentAddressFields = {};

  if (
    !formData.perm_address_same_as_corr_address_fst_account_holder ||
    formData.perm_address_same_as_corr_address_fst_account_holder === ''
  ) {
    permanentAddressFields = {
      ...permanentAddressFields,
      perm_address_same_as_corr_address_fst_account_holder:
        'Is Corrospondence Address same as Permanent Address? is invalid or empty',
    };
  } else {
    if (
      !formData.perm_address_fst_account_holder ||
      formData.perm_address_fst_account_holder === ''
    ) {
      permanentAddressFields = {
        ...permanentAddressFields,
        perm_address_fst_account_holder: 'Address is invalid or empty',
      };
    }

    if (
      !formData.perm_pin_fst_account_holder ||
      formData.perm_pin_fst_account_holder === '' ||
      (formData.perm_pin_fst_account_holder &&
        formData.perm_pin_fst_account_holder.length !== 6)
    ) {
      permanentAddressFields = {
        ...permanentAddressFields,
        perm_pin_fst_account_holder: 'PIN is invalid or empty',
      };
    }
    if (
      !formData.perm_state_fst_account_holder ||
      formData.perm_state_fst_account_holder === ''
    ) {
      permanentAddressFields = {
        ...permanentAddressFields,
        perm_state_fst_account_holder: 'State is invalid or empty',
      };
    }
  }

  return permanentAddressFields;
};

export default PermanentAddressValidations;
