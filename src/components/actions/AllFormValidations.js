import EmailValidations from './EmailValidations';
import PANValidations from './PANValidations';
import AadharValidations from './AadharValidations';
import DOBValidations from './DOBValidations';

const AllFormValidations = (formData, formName) => {
  let allFormFailedFields = {};

  if (!formData.branch || formData.branch === '') {
    allFormFailedFields = {
      ...allFormFailedFields,
      branch: 'Branch is empty or invalid',
    };
  }
  if (!formData.title_account_holder || formData.title_account_holder === '') {
    allFormFailedFields = {
      ...allFormFailedFields,
      title_account_holder: 'Title is empty or invalid',
    };
  }
  if (!formData.fname_account_holder || formData.fname_account_holder === '') {
    allFormFailedFields = {
      ...allFormFailedFields,
      fname_account_holder: 'First Name is empty or invalid',
    };
  }
  if (!formData.lname_account_holder || formData.lname_account_holder === '') {
    allFormFailedFields = {
      ...allFormFailedFields,
      lname_account_holder: 'Last Name is empty or invalid',
    };
  }
  if (
    !formData.mobile_account_holder ||
    formData.mobile_account_holder === '' ||
    formData.mobile_account_holder.length < 10
  ) {
    allFormFailedFields = {
      ...allFormFailedFields,
      mobile_account_holder: 'Mobile is empty or invalid',
    };
  }
  if (
    !formData.email_account_holder ||
    formData.email_account_holder === '' ||
    (formData.email_account_holder &&
      !EmailValidations(formData.email_account_holder))
  ) {
    allFormFailedFields = {
      ...allFormFailedFields,
      email_account_holder: 'Email is empty or invalid',
    };
  }
  if (
    !formData.gender_account_holder ||
    formData.gender_account_holder === ''
  ) {
    allFormFailedFields = {
      ...allFormFailedFields,
      gender_account_holder: 'Gender is empty or invalid',
    };
  }
  if (
    !formData.pan_account_holder ||
    formData.pan_account_holder === '' ||
    (formData.pan_account_holder &&
      !PANValidations(formData.pan_account_holder))
  ) {
    allFormFailedFields = {
      ...allFormFailedFields,
      pan_account_holder: 'PAN is empty or invalid',
    };
  }
  if (
    !formData.aadhar_account_holder ||
    formData.aadhar_account_holder === '' ||
    (formData.aadhar_account_holder &&
      !AadharValidations(formData.aadhar_account_holder))
  ) {
    allFormFailedFields = {
      ...allFormFailedFields,
      aadhar_account_holder: 'Aadhar is empty or invalid',
    };
  }

  if (
    !formData.dob_account_holder ||
    formData.dob_account_holder === '' ||
    (formData.dob_account_holder &&
      !DOBValidations(formData.dob_account_holder, formName, 'majorIndividual'))
  ) {
    allFormFailedFields = {
      ...allFormFailedFields,
      dob_account_holder: 'DOB is empty or invalid',
    };
  }

  return allFormFailedFields;
};

export default AllFormValidations;
