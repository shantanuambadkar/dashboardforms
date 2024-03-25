import ForthHolderNameValidations from './ForthHolderNameValidations';
import ForthHolderAddressValidations from './ForthHolderAddressValidations';
import ForthHolderPermanentAddressValidations from './ForthHolderPermanentAddressValidations';
import ForthHolderDOBValidations from './ForthHolderDOBValidations';
import ForthHolderGenderValidations from './ForthHolderGenderValidations';
import ForthHolderCommunicationKYCValidations from './ForthHolderCommunicationKYCValidations';
import ForthHolderReligionValidations from './ForthHolderReligionValidations';
import ForthHolderCategoryValidations from './ForthHolderCategoryValidations';
import ForthHolderOccupationValidations from './ForthHolderOccupationValidations';
import ForthHolderDisabilityValidations from './ForthHolderDisabilityValidations';
import ForthHolderFatherValidations from './ForthHolderFatherValidations';
import ForthHolderMotherValidations from './ForthHolderMotherValidations';
import ForthHolderSpouseValidations from './ForthHolderSpouseValidations';
import ForthHolderForm6061FieldsValidations from './ForthHolderForm6061FieldsValidations';

const ForthHolderValidations = (formData, formName) => {
  let forthHolderFailedFields = {};

  //Name Fields
  let forthHolderName = ForthHolderNameValidations(formData);
  if (Object.keys(forthHolderName).length > 0) {
    forthHolderFailedFields = { ...forthHolderFailedFields, forthHolderName };
  }
  //Address Fields
  let forthHolderAddress = ForthHolderAddressValidations(formData);
  if (Object.keys(forthHolderAddress).length > 0) {
    forthHolderFailedFields = {
      ...forthHolderFailedFields,
      forthHolderAddress,
    };
  }
  //Permanent Address Fields
  let forthHolderPermAddress = ForthHolderPermanentAddressValidations(formData);
  if (Object.keys(forthHolderPermAddress).length > 0) {
    forthHolderFailedFields = {
      ...forthHolderFailedFields,
      forthHolderPermAddress,
    };
  }
  //DOB Fields
  let forthHolderDOB = ForthHolderDOBValidations(formData, formName);
  if (Object.keys(forthHolderDOB).length > 0) {
    forthHolderFailedFields = { ...forthHolderFailedFields, forthHolderDOB };
  }
  //Gender Fields
  let forthHolderGender = ForthHolderGenderValidations(formData);
  if (Object.keys(forthHolderGender).length > 0) {
    forthHolderFailedFields = { ...forthHolderFailedFields, forthHolderGender };
  }
  //Communication & KYC Fields
  let forthHolderCommKYC = ForthHolderCommunicationKYCValidations(formData);
  if (Object.keys(forthHolderCommKYC).length > 0) {
    forthHolderFailedFields = {
      ...forthHolderFailedFields,
      forthHolderCommKYC,
    };
  }
  //Form60/61 Fields
  let forthHolderForm6061 = ForthHolderForm6061FieldsValidations(formData);
  if (Object.keys(forthHolderForm6061).length > 0) {
    forthHolderFailedFields = {
      ...forthHolderFailedFields,
      forthHolderForm6061,
    };
  }

  //Religion Fields
  let forthHolderReligion = ForthHolderReligionValidations(formData);
  if (Object.keys(forthHolderReligion).length > 0) {
    forthHolderFailedFields = {
      ...forthHolderFailedFields,
      forthHolderReligion,
    };
  }
  //Category Fields
  let forthHolderCategory = ForthHolderCategoryValidations(formData);
  if (Object.keys(forthHolderCategory).length > 0) {
    forthHolderFailedFields = {
      ...forthHolderFailedFields,
      forthHolderCategory,
    };
  }
  //Occupation Fields
  let forthHolderOccupation = ForthHolderOccupationValidations(formData);
  if (Object.keys(forthHolderOccupation).length > 0) {
    forthHolderFailedFields = {
      ...forthHolderFailedFields,
      forthHolderOccupation,
    };
  }
  //Disability Fields
  let forthHolderDisability = ForthHolderDisabilityValidations(formData);
  if (Object.keys(forthHolderDisability).length > 0) {
    forthHolderFailedFields = {
      ...forthHolderFailedFields,
      forthHolderDisability,
    };
  }
  //Father Fields
  let forthHolderFather = ForthHolderFatherValidations(formData);
  if (Object.keys(forthHolderFather).length > 0) {
    forthHolderFailedFields = { ...forthHolderFailedFields, forthHolderFather };
  }
  //Mother Fields
  let forthHolderMother = ForthHolderMotherValidations(formData);
  if (Object.keys(forthHolderMother).length > 0) {
    forthHolderFailedFields = { ...forthHolderFailedFields, forthHolderMother };
  }
  //Spouse Fields
  let forthHolderSpouse = ForthHolderSpouseValidations(formData);
  if (Object.keys(forthHolderSpouse).length > 0) {
    forthHolderFailedFields = { ...forthHolderFailedFields, forthHolderSpouse };
  }

  return forthHolderFailedFields;
};

export default ForthHolderValidations;
