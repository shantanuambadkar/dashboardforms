import DOBValidations from './DOBValidations';
import GuardianValidations from './GuardianValidations';

const NomineeValidations = (formData, formName) => {
  var failedNomineeFileds = {};

  //Nominee Name Validations
  if (!formData.title_nominee || formData.title_nominee === '') {
    failedNomineeFileds = {
      ...failedNomineeFileds,
      title_nominee: 'Title is empty or invalid',
    };
  }
  if (!formData.fname_nominee || formData.fname_nominee === '') {
    failedNomineeFileds = {
      ...failedNomineeFileds,
      fname_nominee: 'First Name is empty or invalid',
    };
  }
  if (!formData.lname_nominee || formData.lname_nominee === '') {
    failedNomineeFileds = {
      ...failedNomineeFileds,
      lname_nominee: 'Last Name is empty or invalid',
    };
  }

  //Nominee Relationship Validations
  if (!formData.relationship_nominee || formData.relationship_nominee === '') {
    failedNomineeFileds = {
      ...failedNomineeFileds,
      relationship_nominee: 'Relationship is empty or invalid',
    };
  }
  if (
    formData.relationship_nominee &&
    formData.relationship_nominee === 'OTHER' &&
    (!formData.other_relationship_nominee ||
      formData.other_relationship_nominee === '')
  ) {
    failedNomineeFileds = {
      ...failedNomineeFileds,
      other_relationship_nominee: 'Other Relationship is empty or invalid',
    };
  }

  //Nominee Address Validations
  if (!formData.address_nominee || formData.address_nominee === '') {
    failedNomineeFileds = {
      ...failedNomineeFileds,
      address_nominee: 'Address is empty or invalid',
    };
  }
  if (
    !formData.pin_nominee ||
    formData.pin_nominee === '' ||
    (formData.pin_nominee && formData.pin_nominee.length !== 6)
  ) {
    failedNomineeFileds = {
      ...failedNomineeFileds,
      pin_nominee: 'PIN is empty or invalid',
    };
  }
  if (!formData.state_nominee || formData.state_nominee === '') {
    failedNomineeFileds = {
      ...failedNomineeFileds,
      state_nominee: 'State is empty or invalid',
    };
  }

  //Nominee DOB Validations
  if (
    !formData.dob_nominee ||
    formData.dob_nominee === '' ||
    (formData.dob_nominee &&
      !DOBValidations(formData.dob_nominee, formName, 'minorOrNominee'))
  ) {
    failedNomineeFileds = {
      ...failedNomineeFileds,
      dob_nominee: 'DOB is empty or invalid',
    };
  }

  // Nominee Gender
  if (!formData.gender_nominee || formData.gender_nominee === '') {
    failedNomineeFileds = {
      ...failedNomineeFileds,
      gender_nominee: 'Gender is empty or invalid',
    };
  }

  // Nominee Aadhar
  if (
    formData.aadhar_nominee &&
    (formData.aadhar_nominee.length !== 12 ||
      formData.aadhar_nominee.length !== 16)
  ) {
    failedNomineeFileds = {
      ...failedNomineeFileds,
      aadhar_nominee: 'Aadhar is empty or invalid',
    };
  }

  //Guardian Fields
  if (formData.age_nominee <= 0 || formData.age_nominee < 18) {
    const failedGuardianFields = GuardianValidations(formData, formName);
    if (Object.keys(failedGuardianFields).length > 0) {
      failedNomineeFileds = {
        ...failedNomineeFileds,
        failedGuardianFields,
      };
    }
  }

  return failedNomineeFileds;
};

export default NomineeValidations;
