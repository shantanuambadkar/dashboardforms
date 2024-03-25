//copyFields = 'CorrosToPerm', 'CorrosToNominee'

const CopyAddress = (formData, formName, copyFields) => {
  let successObj = {};

  if (copyFields === 'CorrosToNominee') {
    try {
      if (formData.nominee_addr_diff_as_acc_holder === 'NO') {
        formData.address_nominee = formData.address_fst_account_holder;
        formData.city_nominee = formData.city_fst_account_holder;
        formData.district_nominee = formData.district_fst_account_holder;
        formData.pin_nominee = formData.pin_fst_account_holder;
        formData.state_nominee = formData.state_fst_account_holder;
        formData.country_nominee = formData.country_fst_account_holder;
        successObj = { nominee_addr_copied: 'No errors' };
        return successObj;
      } else {
        successObj = { nominee_addr_copied: 'Not required' };
        return successObj;
      }
    } catch (e) {
      successObj = { nominee_addr_copied: e };
      return successObj;
    }
  } else {
    if (formName === 'savings' || formName === 'current') {
      try {
        if (copyFields === 'CorrosToPerm') {
          if (
            formData.perm_address_same_as_corr_address_fst_account_holder ===
            'YES'
          ) {
            formData.perm_address_fst_account_holder =
              formData.address_fst_account_holder;
            formData.perm_city_fst_account_holder =
              formData.city_fst_account_holder;
            formData.perm_district_fst_account_holder =
              formData.district_fst_account_holder;
            formData.perm_pin_fst_account_holder =
              formData.pin_fst_account_holder;
            formData.perm_state_fst_account_holder =
              formData.state_fst_account_holder;
            formData.perm_country_fst_account_holder =
              formData.country_fst_account_holder;

            successObj = { perm_addr_copied: 'No errors' };
            return successObj;
          } else {
            successObj = { perm_addr_copied: 'Not required' };
            return successObj;
          }
        }
      } catch (e) {
        successObj = { perm_addr_copied: e };
        return successObj;
      }
    } else {
      successObj = { perm_addr_copied: 'Not required' };
      return successObj;
    }
  }
  return successObj;
};

export default CopyAddress;
