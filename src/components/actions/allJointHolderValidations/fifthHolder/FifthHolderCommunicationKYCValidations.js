import PANValidations from '../../PANValidations';
import AadharValidations from '../../AadharValidations';
import EmailValidations from '../../EmailValidations';

const FifthHolderCommunicationKYCValidations = (formData) => {
  let failedFifthHolderCommKYCFields = {};
  //PAN
  if (
    !formData.pan_fifth_account_holder ||
    formData.pan_fifth_account_holder === '' ||
    (formData.pan_fifth_account_holder &&
      !PANValidations(formData.pan_fifth_account_holder))
  ) {
    failedFifthHolderCommKYCFields = {
      ...failedFifthHolderCommKYCFields,
      pan_fifth_account_holder: 'PAN is invalid or empty',
    };
  }
  //Aadhar
  if (
    !formData.aadhar_fifth_account_holder ||
    formData.aadhar_fifth_account_holder === '' ||
    (formData.aadhar_fifth_account_holder &&
      !AadharValidations(formData.aadhar_fifth_account_holder))
  ) {
    failedFifthHolderCommKYCFields = {
      ...failedFifthHolderCommKYCFields,
      aadhar_fifth_account_holder: 'Aadhar is invalid or empty',
    };
  }
  //Mobile
  if (
    !formData.mobile_fifth_account_holder ||
    formData.mobile_fifth_account_holder === '' ||
    formData.mobile_fifth_account_holder.length < 10
  ) {
    failedFifthHolderCommKYCFields = {
      ...failedFifthHolderCommKYCFields,
      mobile_fifth_account_holder: 'Mobile is invalid or empty',
    };
  } else {
    let mobile_No = Number(formData.mobile_fifth_account_holder);
    if (mobile_No === 0) {
      failedFifthHolderCommKYCFields = {
        ...failedFifthHolderCommKYCFields,
        mobile_fifth_account_holder: 'Mobile is invalid',
      };
    }
  }
  //Email
  if (
    !formData.email_fifth_account_holder ||
    formData.email_fifth_account_holder === '' ||
    (formData.email_fifth_account_holder &&
      !EmailValidations(formData.email_fifth_account_holder))
  ) {
    failedFifthHolderCommKYCFields = {
      ...failedFifthHolderCommKYCFields,
      email_fifth_account_holder: 'Email is invalid or empty',
    };
  }
  //Marital Status
  if (
    !formData.marital_status_fifth_account_holder ||
    formData.marital_status_fifth_account_holder === ''
  ) {
    failedFifthHolderCommKYCFields = {
      ...failedFifthHolderCommKYCFields,
      marital_status_fifth_account_holder: 'Marital Status is invalid or empty',
    };
  }
  return failedFifthHolderCommKYCFields;
};

export default FifthHolderCommunicationKYCValidations;
