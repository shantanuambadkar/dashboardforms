import PANValidations from '../../PANValidations';
import AadharValidations from '../../AadharValidations';
import EmailValidations from '../../EmailValidations';

const ThirdHolderCommunicationKYCValidations = (formData) => {
  let failedThirdHolderCommKYCFields = {};
  //PAN
  if (
    !formData.pan_thrd_account_holder ||
    formData.pan_thrd_account_holder === '' ||
    (formData.pan_thrd_account_holder &&
      !PANValidations(formData.pan_thrd_account_holder))
  ) {
    failedThirdHolderCommKYCFields = {
      ...failedThirdHolderCommKYCFields,
      pan_thrd_account_holder: 'PAN is invalid or empty',
    };
  }
  //Aadhar
  if (
    !formData.aadhar_thrd_account_holder ||
    formData.aadhar_thrd_account_holder === '' ||
    (formData.aadhar_thrd_account_holder &&
      !AadharValidations(formData.aadhar_thrd_account_holder))
  ) {
    failedThirdHolderCommKYCFields = {
      ...failedThirdHolderCommKYCFields,
      aadhar_thrd_account_holder: 'Aadhar is invalid or empty',
    };
  }
  //Mobile
  if (
    !formData.mobile_thrd_account_holder ||
    formData.mobile_thrd_account_holder === '' ||
    formData.mobile_thrd_account_holder.length < 10
  ) {
    failedThirdHolderCommKYCFields = {
      ...failedThirdHolderCommKYCFields,
      mobile_thrd_account_holder: 'Mobile is invalid or empty',
    };
  } else {
    let mobile_No = Number(formData.mobile_thrd_account_holder);
    if (mobile_No === 0) {
      failedThirdHolderCommKYCFields = {
        ...failedThirdHolderCommKYCFields,
        mobile_thrd_account_holder: 'Mobile is invalid',
      };
    }
  }
  //Email
  if (
    !formData.email_thrd_account_holder ||
    formData.email_thrd_account_holder === '' ||
    (formData.email_thrd_account_holder &&
      !EmailValidations(formData.email_thrd_account_holder))
  ) {
    failedThirdHolderCommKYCFields = {
      ...failedThirdHolderCommKYCFields,
      email_thrd_account_holder: 'Email is invalid or empty',
    };
  }
  //Marital Status
  if (
    !formData.marital_status_thrd_account_holder ||
    formData.marital_status_thrd_account_holder === ''
  ) {
    failedThirdHolderCommKYCFields = {
      ...failedThirdHolderCommKYCFields,
      marital_status_thrd_account_holder: 'Marital Status is invalid or empty',
    };
  }
  return failedThirdHolderCommKYCFields;
};

export default ThirdHolderCommunicationKYCValidations;
