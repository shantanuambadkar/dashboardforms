import DOBValidations from './DOBValidations';

const GuardianValidations = (formData, formName) => {
  let guardianFailedFileds = {};

  if (!formData.title_guardian || formData.title_guardian === '') {
    guardianFailedFileds = {
      ...guardianFailedFileds,
      title_guardian: 'Title is empty or invalid',
    };
  }
  if (!formData.fname_guardian || formData.fname_guardian === '') {
    guardianFailedFileds = {
      ...guardianFailedFileds,
      fname_guardian: 'First Name is empty or invalid',
    };
  }
  if (!formData.lname_guardian || formData.lname_guardian === '') {
    guardianFailedFileds = {
      ...guardianFailedFileds,
      lname_guardian: 'Last Name is empty or invalid',
    };
  }
  if (
    !formData.mobile_guardian ||
    formData.mobile_guardian === '' ||
    (formData.mobile_guardian && formData.mobile_guardian.length !== 10)
  ) {
    guardianFailedFileds = {
      ...guardianFailedFileds,
      mobile_guardian: 'Mobile is empty or invalid',
    };
  }
  if (
    !formData.relationship_guardian ||
    formData.relationship_guardian === ''
  ) {
    guardianFailedFileds = {
      ...guardianFailedFileds,
      relationship_guardian: 'Relationship is empty or invalid',
    };
  }
  if (
    formData.relationship_guardian &&
    formData.relationship_guardian === 'OTHER' &&
    (!formData.other_relationship_guardian ||
      formData.other_relationship_guardian === '')
  ) {
    guardianFailedFileds = {
      ...guardianFailedFileds,
      other_relationship_guardian: 'Other Relationship is empty or invalid',
    };
  }
  if (
    !formData.dob_guardian ||
    formData.dob_guardian === '' ||
    (formData.dob_guardian &&
      !DOBValidations(formData.dob_guardian, formName, 'guardian'))
  ) {
    guardianFailedFileds = {
      ...guardianFailedFileds,
      dob_guardian: 'DOB is empty or invalid',
    };
  }
  if (!formData.address_guardian || formData.address_guardian === '') {
    guardianFailedFileds = {
      ...guardianFailedFileds,
      address_guardian: 'Address is empty or invalid',
    };
  }
  if (!formData.state_guardian || formData.state_guardian === '') {
    guardianFailedFileds = {
      ...guardianFailedFileds,
      state_guardian: 'State is empty or invalid',
    };
  }
  if (
    !formData.pin_guardian ||
    formData.pin_guardian === '' ||
    (formData.pin_guardian.length && formData.pin_guardian.length !== 6)
  ) {
    guardianFailedFileds = {
      ...guardianFailedFileds,
      pin_guardian: 'PIN is empty or invalid',
    };
  }

  return guardianFailedFileds;
};

export default GuardianValidations;
