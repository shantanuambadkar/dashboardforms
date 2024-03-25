import ThirdHolderNameValidations from './ThirdHolderNameValidations';
import ThirdHolderAddressValidations from './ThirdHolderAddressValidations';
import ThirdHolderPermanentAddressValidations from './ThirdHolderPermanentAddressValidations';
import ThirdHolderDOBValidations from './ThirdHolderDOBValidations';
import ThirdHolderGenderValidations from './ThirdHolderGenderValidations';
import ThirdHolderCommunicationKYCValidations from './ThirdHolderCommunicationKYCValidations';
import ThirdHolderReligionValidations from './ThirdHolderReligionValidations';
import ThirdHolderCategoryValidations from './ThirdHolderCategoryValidations';
import ThirdHolderOccupationValidations from './ThirdHolderOccupationValidations';
import ThirdHolderDisabilityValidations from './ThirdHolderDisabilityValidations';
import ThirdHolderFatherValidations from './ThirdHolderFatherValidations';
import ThirdHolderMotherValidations from './ThirdHolderMotherValidations';
import ThirdHolderSpouseValidations from './ThirdHolderSpouseValidations';
import ThirdHolderForm6061FieldsValidations from './ThirdHolderForm6061FieldsValidations';

const ThirdHolderValidations = (formData, formName) => {
  let thrdHolderFailedFields = {};

  //Name Fields
  let thrdHolderName = ThirdHolderNameValidations(formData);
  if (Object.keys(thrdHolderName).length > 0) {
    thrdHolderFailedFields = { ...thrdHolderFailedFields, thrdHolderName };
  }
  //Address Fields
  let thrdHolderAddress = ThirdHolderAddressValidations(formData);
  if (Object.keys(thrdHolderAddress).length > 0) {
    thrdHolderFailedFields = { ...thrdHolderFailedFields, thrdHolderAddress };
  }
  //Permanent Address Fields
  let thrdHolderPermAddress = ThirdHolderPermanentAddressValidations(formData);
  if (Object.keys(thrdHolderPermAddress).length > 0) {
    thrdHolderFailedFields = {
      ...thrdHolderFailedFields,
      thrdHolderPermAddress,
    };
  }
  //DOB Fields
  let thrdHolderDOB = ThirdHolderDOBValidations(formData, formName);
  if (Object.keys(thrdHolderDOB).length > 0) {
    thrdHolderFailedFields = { ...thrdHolderFailedFields, thrdHolderDOB };
  }
  //Gender Fields
  let thrdHolderGender = ThirdHolderGenderValidations(formData);
  if (Object.keys(thrdHolderGender).length > 0) {
    thrdHolderFailedFields = { ...thrdHolderFailedFields, thrdHolderGender };
  }
  //Communication & KYC Fields
  let thrdHolderCommKYC = ThirdHolderCommunicationKYCValidations(formData);
  if (Object.keys(thrdHolderCommKYC).length > 0) {
    thrdHolderFailedFields = { ...thrdHolderFailedFields, thrdHolderCommKYC };
  }
  //Form60/61 Fields
  let thrdHolderForm6061 = ThirdHolderForm6061FieldsValidations(formData);
  if (Object.keys(thrdHolderForm6061).length > 0) {
    thrdHolderFailedFields = { ...thrdHolderFailedFields, thrdHolderForm6061 };
  }

  //Religion Fields
  let thrdHolderReligion = ThirdHolderReligionValidations(formData);
  if (Object.keys(thrdHolderReligion).length > 0) {
    thrdHolderFailedFields = { ...thrdHolderFailedFields, thrdHolderReligion };
  }
  //Category Fields
  let thrdHolderCategory = ThirdHolderCategoryValidations(formData);
  if (Object.keys(thrdHolderCategory).length > 0) {
    thrdHolderFailedFields = { ...thrdHolderFailedFields, thrdHolderCategory };
  }
  //Occupation Fields
  let thrdHolderOccupation = ThirdHolderOccupationValidations(formData);
  if (Object.keys(thrdHolderOccupation).length > 0) {
    thrdHolderFailedFields = {
      ...thrdHolderFailedFields,
      thrdHolderOccupation,
    };
  }
  //Disability Fields
  let thrdHolderDisability = ThirdHolderDisabilityValidations(formData);
  if (Object.keys(thrdHolderDisability).length > 0) {
    thrdHolderFailedFields = {
      ...thrdHolderFailedFields,
      thrdHolderDisability,
    };
  }
  //Father Fields
  let thrdHolderFather = ThirdHolderFatherValidations(formData);
  if (Object.keys(thrdHolderFather).length > 0) {
    thrdHolderFailedFields = { ...thrdHolderFailedFields, thrdHolderFather };
  }
  //Mother Fields
  let thrdHolderMother = ThirdHolderMotherValidations(formData);
  if (Object.keys(thrdHolderMother).length > 0) {
    thrdHolderFailedFields = { ...thrdHolderFailedFields, thrdHolderMother };
  }
  //Spouse Fields
  let thrdHolderSpouse = ThirdHolderSpouseValidations(formData);
  if (Object.keys(thrdHolderSpouse).length > 0) {
    thrdHolderFailedFields = { ...thrdHolderFailedFields, thrdHolderSpouse };
  }

  return thrdHolderFailedFields;
};

export default ThirdHolderValidations;
