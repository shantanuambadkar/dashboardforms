import PANValidations from '../../PANValidations';
import AadharValidations from '../../AadharValidations';
import EmailValidations from '../../EmailValidations';

const ForthHolderCommunicationKYCValidations = (formData) => {
  let failedForthHolderCommKYCFields = {};
  //PAN
  if (
    !formData.pan_forth_account_holder ||
    formData.pan_forth_account_holder === '' ||
    (formData.pan_forth_account_holder &&
      !PANValidations(formData.pan_forth_account_holder))
  ) {
    failedForthHolderCommKYCFields = {
      ...failedForthHolderCommKYCFields,
      pan_forth_account_holder: 'PAN is invalid or empty',
    };
  }
  //Aadhar
  if (
    !formData.aadhar_forth_account_holder ||
    formData.aadhar_forth_account_holder === '' ||
    (formData.aadhar_forth_account_holder &&
      !AadharValidations(formData.aadhar_forth_account_holder))
  ) {
    failedForthHolderCommKYCFields = {
      ...failedForthHolderCommKYCFields,
      aadhar_forth_account_holder: 'Aadhar is invalid or empty',
    };
  }
  //Mobile
  if (
    !formData.mobile_forth_account_holder ||
    formData.mobile_forth_account_holder === '' ||
    formData.mobile_forth_account_holder.length < 10
  ) {
    failedForthHolderCommKYCFields = {
      ...failedForthHolderCommKYCFields,
      mobile_forth_account_holder: 'Mobile is invalid or empty',
    };
  } else {
    let mobile_No = Number(formData.mobile_forth_account_holder);
    if (mobile_No === 0) {
      failedForthHolderCommKYCFields = {
        ...failedForthHolderCommKYCFields,
        mobile_forth_account_holder: 'Mobile is invalid',
      };
    }
  }
  //Email
  if (
    !formData.email_forth_account_holder ||
    formData.email_forth_account_holder === '' ||
    (formData.email_forth_account_holder &&
      !EmailValidations(formData.email_forth_account_holder))
  ) {
    failedForthHolderCommKYCFields = {
      ...failedForthHolderCommKYCFields,
      email_forth_account_holder: 'Email is invalid or empty',
    };
  }
  //Marital Status
  if (
    !formData.marital_status_forth_account_holder ||
    formData.marital_status_forth_account_holder === ''
  ) {
    failedForthHolderCommKYCFields = {
      ...failedForthHolderCommKYCFields,
      marital_status_forth_account_holder: 'Marital Status is invalid or empty',
    };
  }
  return failedForthHolderCommKYCFields;
};

export default ForthHolderCommunicationKYCValidations;
