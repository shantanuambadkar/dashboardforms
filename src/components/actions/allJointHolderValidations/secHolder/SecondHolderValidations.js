import SecondHolderNameValidations from './SecondHolderNameValidations';
import SecondHolderAddressValidations from './SecondHolderAddressValidations';
import SecondHolderPermanentAddressValidations from './SecondHolderPermanentAddressValidations';
import SecondHolderDOBValidations from './SecondHolderDOBValidations';
import SecondHolderGenderValidations from './SecondHolderGenderValidations';
import SecondHolderCommunicationKYCValidations from './SecondHolderCommunicationKYCValidations';
import SecondHolderReligionValidations from './SecondHolderReligionValidations';
import SecondHolderCategoryValidations from './SecondHolderCategoryValidations';
import SecondHolderOccupationValidations from './SecondHolderOccupationValidations';
import SecondHolderDisabilityValidations from './SecondHolderDisabilityValidations';
import SecondHolderFatherValidations from './SecondHolderFatherValidations';
import SecondHolderMotherValidations from './SecondHolderMotherValidations';
import SecondHolderSpouseValidations from './SecondHolderSpouseValidations';
import SecondHolderForm6061FieldsValidations from './SecondHolderForm6061FieldsValidations';

const SecondHolderValidations = (formData, formName) => {
  let secHolderFailedFields = {};

  //Name Fields
  let secHolderName = SecondHolderNameValidations(formData);
  if (Object.keys(secHolderName).length > 0) {
    secHolderFailedFields = { ...secHolderFailedFields, secHolderName };
  }
  //Address Fields
  let secHolderAddress = SecondHolderAddressValidations(formData);
  if (Object.keys(secHolderAddress).length > 0) {
    secHolderFailedFields = { ...secHolderFailedFields, secHolderAddress };
  }
  //Permanent Address Fields
  let secHolderPermAddress = SecondHolderPermanentAddressValidations(formData);
  if (Object.keys(secHolderPermAddress).length > 0) {
    secHolderFailedFields = { ...secHolderFailedFields, secHolderPermAddress };
  }
  //DOB Fields
  let secHolderDOB = SecondHolderDOBValidations(formData, formName);
  if (Object.keys(secHolderDOB).length > 0) {
    secHolderFailedFields = { ...secHolderFailedFields, secHolderDOB };
  }
  //Gender Fields
  let secHolderGender = SecondHolderGenderValidations(formData);
  if (Object.keys(secHolderGender).length > 0) {
    secHolderFailedFields = { ...secHolderFailedFields, secHolderGender };
  }
  //Communication & KYC Fields
  let secHolderCommKYC = SecondHolderCommunicationKYCValidations(formData);
  if (Object.keys(secHolderCommKYC).length > 0) {
    secHolderFailedFields = { ...secHolderFailedFields, secHolderCommKYC };
  }
  //Form60/61 Fields
  let secHolderForm6061 = SecondHolderForm6061FieldsValidations(formData);
  if (Object.keys(secHolderForm6061).length > 0) {
    secHolderFailedFields = { ...secHolderFailedFields, secHolderForm6061 };
  }

  //Religion Fields
  let secHolderReligion = SecondHolderReligionValidations(formData);
  if (Object.keys(secHolderReligion).length > 0) {
    secHolderFailedFields = { ...secHolderFailedFields, secHolderReligion };
  }
  //Category Fields
  let secHolderCategory = SecondHolderCategoryValidations(formData);
  if (Object.keys(secHolderCategory).length > 0) {
    secHolderFailedFields = { ...secHolderFailedFields, secHolderCategory };
  }
  //Occupation Fields
  let secHolderOccupation = SecondHolderOccupationValidations(formData);
  if (Object.keys(secHolderOccupation).length > 0) {
    secHolderFailedFields = { ...secHolderFailedFields, secHolderOccupation };
  }
  //Disability Fields
  let secHolderDisability = SecondHolderDisabilityValidations(formData);
  if (Object.keys(secHolderDisability).length > 0) {
    secHolderFailedFields = { ...secHolderFailedFields, secHolderDisability };
  }
  //Father Fields
  let secHolderFather = SecondHolderFatherValidations(formData);
  if (Object.keys(secHolderFather).length > 0) {
    secHolderFailedFields = { ...secHolderFailedFields, secHolderFather };
  }
  //Mother Fields
  let secHolderMother = SecondHolderMotherValidations(formData);
  if (Object.keys(secHolderMother).length > 0) {
    secHolderFailedFields = { ...secHolderFailedFields, secHolderMother };
  }
  //Spouse Fields
  let secHolderSpouse = SecondHolderSpouseValidations(formData);
  if (Object.keys(secHolderSpouse).length > 0) {
    secHolderFailedFields = { ...secHolderFailedFields, secHolderSpouse };
  }

  return secHolderFailedFields;
};

export default SecondHolderValidations;
