import FifthHolderNameValidations from './FifthHolderNameValidations';
import FifthHolderAddressValidations from './FifthHolderAddressValidations';
import FifthHolderPermanentAddressValidations from './FifthHolderPermanentAddressValidations';
import FifthHolderDOBValidations from './FifthHolderDOBValidations';
import FifthHolderGenderValidations from './FifthHolderGenderValidations';
import FifthHolderCommunicationKYCValidations from './FifthHolderCommunicationKYCValidations';
import FifthHolderReligionValidations from './FifthHolderReligionValidations';
import FifthHolderCategoryValidations from './FifthHolderCategoryValidations';
import FifthHolderOccupationValidations from './FifthHolderOccupationValidations';
import FifthHolderDisabilityValidations from './FifthHolderDisabilityValidations';
import FifthHolderFatherValidations from './FifthHolderFatherValidations';
import FifthHolderMotherValidations from './FifthHolderMotherValidations';
import FifthHolderSpouseValidations from './FifthHolderSpouseValidations';
import FifthHolderForm6061FieldsValidations from './FifthHolderForm6061FieldsValidations';

const FifthHolderValidations = (formData, formName) => {
  let fifthHolderFailedFields = {};

  //Name Fields
  let fifthHolderName = FifthHolderNameValidations(formData);
  if (Object.keys(fifthHolderName).length > 0) {
    fifthHolderFailedFields = { ...fifthHolderFailedFields, fifthHolderName };
  }
  //Address Fields
  let fifthHolderAddress = FifthHolderAddressValidations(formData);
  if (Object.keys(fifthHolderAddress).length > 0) {
    fifthHolderFailedFields = {
      ...fifthHolderFailedFields,
      fifthHolderAddress,
    };
  }
  //Permanent Address Fields
  let fifthHolderPermAddress = FifthHolderPermanentAddressValidations(formData);
  if (Object.keys(fifthHolderPermAddress).length > 0) {
    fifthHolderFailedFields = {
      ...fifthHolderFailedFields,
      fifthHolderPermAddress,
    };
  }
  //DOB Fields
  let fifthHolderDOB = FifthHolderDOBValidations(formData, formName);
  if (Object.keys(fifthHolderDOB).length > 0) {
    fifthHolderFailedFields = { ...fifthHolderFailedFields, fifthHolderDOB };
  }
  //Gender Fields
  let fifthHolderGender = FifthHolderGenderValidations(formData);
  if (Object.keys(fifthHolderGender).length > 0) {
    fifthHolderFailedFields = { ...fifthHolderFailedFields, fifthHolderGender };
  }
  //Communication & KYC Fields
  let fifthHolderCommKYC = FifthHolderCommunicationKYCValidations(formData);
  if (Object.keys(fifthHolderCommKYC).length > 0) {
    fifthHolderFailedFields = {
      ...fifthHolderFailedFields,
      fifthHolderCommKYC,
    };
  }
  //Form60/61 Fields
  let fifthHolderForm6061 = FifthHolderForm6061FieldsValidations(formData);
  if (Object.keys(fifthHolderForm6061).length > 0) {
    fifthHolderFailedFields = {
      ...fifthHolderFailedFields,
      fifthHolderForm6061,
    };
  }

  //Religion Fields
  let fifthHolderReligion = FifthHolderReligionValidations(formData);
  if (Object.keys(fifthHolderReligion).length > 0) {
    fifthHolderFailedFields = {
      ...fifthHolderFailedFields,
      fifthHolderReligion,
    };
  }
  //Category Fields
  let fifthHolderCategory = FifthHolderCategoryValidations(formData);
  if (Object.keys(fifthHolderCategory).length > 0) {
    fifthHolderFailedFields = {
      ...fifthHolderFailedFields,
      fifthHolderCategory,
    };
  }
  //Occupation Fields
  let fifthHolderOccupation = FifthHolderOccupationValidations(formData);
  if (Object.keys(fifthHolderOccupation).length > 0) {
    fifthHolderFailedFields = {
      ...fifthHolderFailedFields,
      fifthHolderOccupation,
    };
  }
  //Disability Fields
  let fifthHolderDisability = FifthHolderDisabilityValidations(formData);
  if (Object.keys(fifthHolderDisability).length > 0) {
    fifthHolderFailedFields = {
      ...fifthHolderFailedFields,
      fifthHolderDisability,
    };
  }
  //Father Fields
  let fifthHolderFather = FifthHolderFatherValidations(formData);
  if (Object.keys(fifthHolderFather).length > 0) {
    fifthHolderFailedFields = { ...fifthHolderFailedFields, fifthHolderFather };
  }
  //Mother Fields
  let fifthHolderMother = FifthHolderMotherValidations(formData);
  if (Object.keys(fifthHolderMother).length > 0) {
    fifthHolderFailedFields = { ...fifthHolderFailedFields, fifthHolderMother };
  }
  //Spouse Fields
  let fifthHolderSpouse = FifthHolderSpouseValidations(formData);
  if (Object.keys(fifthHolderSpouse).length > 0) {
    fifthHolderFailedFields = { ...fifthHolderFailedFields, fifthHolderSpouse };
  }

  return fifthHolderFailedFields;
};

export default FifthHolderValidations;
