import PANValidations from '../../PANValidations';
import AadharValidations from '../../AadharValidations';
import EmailValidations from '../../EmailValidations';

const SecondHolderCommunicationKYCValidations = (formData) => {
  let failedSecondHolderCommKYCFields = {};
  //PAN
  if (
    !formData.pan_scnd_account_holder ||
    formData.pan_scnd_account_holder === '' ||
    (formData.pan_scnd_account_holder &&
      !PANValidations(formData.pan_scnd_account_holder))
  ) {
    failedSecondHolderCommKYCFields = {
      ...failedSecondHolderCommKYCFields,
      pan_scnd_account_holder: 'PAN is invalid or empty',
    };
  }
  //Aadhar
  if (
    !formData.aadhar_scnd_account_holder ||
    formData.aadhar_scnd_account_holder === '' ||
    (formData.aadhar_scnd_account_holder &&
      !AadharValidations(formData.aadhar_scnd_account_holder))
  ) {
    failedSecondHolderCommKYCFields = {
      ...failedSecondHolderCommKYCFields,
      aadhar_scnd_account_holder: 'Aadhar is invalid or empty',
    };
  }
  //Mobile
  if (
    !formData.mobile_scnd_account_holder ||
    formData.mobile_scnd_account_holder === '' ||
    formData.mobile_scnd_account_holder.length < 10
  ) {
    failedSecondHolderCommKYCFields = {
      ...failedSecondHolderCommKYCFields,
      mobile_scnd_account_holder: 'Mobile is invalid or empty',
    };
  } else {
    let mobile_No = Number(formData.mobile_scnd_account_holder);
    if (mobile_No === 0) {
      failedSecondHolderCommKYCFields = {
        ...failedSecondHolderCommKYCFields,
        mobile_scnd_account_holder: 'Mobile is invalid',
      };
    }
  }
  //Email
  if (
    !formData.email_scnd_account_holder ||
    formData.email_scnd_account_holder === '' ||
    (formData.email_scnd_account_holder &&
      !EmailValidations(formData.email_scnd_account_holder))
  ) {
    failedSecondHolderCommKYCFields = {
      ...failedSecondHolderCommKYCFields,
      email_scnd_account_holder: 'Email is invalid or empty',
    };
  }
  //Marital Status
  if (
    !formData.marital_status_scnd_account_holder ||
    formData.marital_status_scnd_account_holder === ''
  ) {
    failedSecondHolderCommKYCFields = {
      ...failedSecondHolderCommKYCFields,
      marital_status_scnd_account_holder: 'Marital Status is invalid or empty',
    };
  }
  return failedSecondHolderCommKYCFields;
};

export default SecondHolderCommunicationKYCValidations;
