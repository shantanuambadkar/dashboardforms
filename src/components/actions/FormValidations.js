import InsertAPICall from '../../apiAction/InsertAPICall';
import AllFormValidations from './AllFormValidations';
import NomineeValidations from './NomineeValidations';
import SavingsFormValidations from './SavingsFormValidations';
import AmountValidations from './AmountValidations';
import PermanentAddressValidations from './PermanentAddressValidations';
import Form6061Validations from './Form6061Validations';
import FatherFieldsValidations from './FatherFieldsValidations';
import MotherFieldsValidations from './MotherFieldsValidations';
/* import SpouseFieldsValidations from './SpouseFieldsValidations'; */
import ReligionValidations from './ReligionValidations';
import CategoryValidations from './CategoryValidations';
import OccupationValidations from './OccupationValidations';
import DisabilityValidations from './DisabilityValidations';
import AllJointHolderValidations from './allJointHolderValidations/AllJointHolderValidations';
/* import MaritalStatusValidations from './MaritalStatusValidations';
import PoliticalExposureValidations from './PoliticalExposureValidations'; */
import CopyAddress from './copyingFormData/CopyAddress';

function FormValidations(formName, formData) {
  var failedFields = {};

  async function callInsertAPIFunc() {
    try {
      await InsertAPICall(formData, formName);
    } catch (error) {
      console.error('Error in API call:', error);
    }
  }

  if (formName !== 'fastag') {
    const permAddrCopyObj = CopyAddress(formData, formName, 'CorrosToPerm');
    /* console.log(
      'permAddrCopyObj',
      permAddrCopyObj,
      Object.keys(permAddrCopyObj).length,
      permAddrCopyObj.perm_addr_copied
    ); */
    if (
      permAddrCopyObj.perm_addr_copied !== 'Not required' &&
      permAddrCopyObj.perm_addr_copied !== 'No errors'
    ) {
      failedFields = { ...failedFields, permAddrCopyObj };
    }

    const nomAddrCopyObj = CopyAddress(formData, formName, 'CorrosToNominee');
    /* console.log(
      'nomAddrCopyObj',
      nomAddrCopyObj,
      Object.keys(nomAddrCopyObj).length,
      nomAddrCopyObj.nominee_addr_copied
    ); */
    if (
      nomAddrCopyObj.nominee_addr_copied !== 'Not required' &&
      nomAddrCopyObj.nominee_addr_copied !== 'No errors'
    ) {
      failedFields = { ...failedFields, nomAddrCopyObj };
    }
  }

  const invalidFormFields = AllFormValidations(formData, formName);
  if (Object.keys(invalidFormFields).length > 0) {
    failedFields = { ...failedFields, invalidFormFields };
  }

  //Form specific validations

  // Nominee Validations
  if (formName !== 'fastag') {
    const invalidNomineeFields = NomineeValidations(formData, formName);
    if (Object.keys(invalidNomineeFields).length > 0) {
      failedFields = { ...failedFields, invalidNomineeFields };
    }
  }

  //PMJJBY, FasTag, PMSBY Common
  if (formName === 'pmsby' || formName === 'pmjjby' || formName === 'fastag') {
    /* console.log(failedFields, 'failed fields'); */
    if (!formData.sb_account_no || formData.sb_account_no === '') {
      failedFields = { ...failedFields, sb_account_no: true };
    }
  }
  //Savings Form
  if (formName === 'savings') {
    const invalidSavingsFields = SavingsFormValidations(formData);
    if (Object.keys(invalidSavingsFields).length > 0) {
      failedFields = { ...failedFields, invalidSavingsFields };
    }
  }
  //Savings, Current & FD Common
  if (formName === 'savings' || formName === 'current' || formName === 'fd') {
    const invalidAmountFields = AmountValidations(formData);
    if (Object.keys(invalidAmountFields).length > 0) {
      failedFields = { ...failedFields, invalidAmountFields };
    }
    const invalidPermAddrFields = PermanentAddressValidations(formData);
    if (Object.keys(invalidPermAddrFields).length > 0) {
      failedFields = { ...failedFields, invalidPermAddrFields };
    }
    const invalidForm6061Fileds = Form6061Validations(formData);
    if (Object.keys(invalidForm6061Fileds).length > 0) {
      failedFields = { ...failedFields, invalidForm6061Fileds };
    }
    /* const invalidMaritalStatusFileds = MaritalStatusValidations(formData);
    if (Object.keys(invalidMaritalStatusFileds).length > 0) {
      failedFields = { ...failedFields, invalidMaritalStatusFileds };
    } */
    const invalidDisabilityFileds = DisabilityValidations(formData);
    if (Object.keys(invalidDisabilityFileds).length > 0) {
      failedFields = { ...failedFields, invalidDisabilityFileds };
    }
    /* const invalidPoliticalExposureFileds =
      PoliticalExposureValidations(formData);
    if (Object.keys(invalidPoliticalExposureFileds).length > 0) {
      failedFields = { ...failedFields, invalidPoliticalExposureFileds };
    } */
    const invalidFatherFields = FatherFieldsValidations(formData);
    if (Object.keys(invalidFatherFields).length > 0) {
      failedFields = { ...failedFields, invalidFatherFields };
    }
    const invalidMotherFields = MotherFieldsValidations(formData);
    if (Object.keys(invalidMotherFields).length > 0) {
      failedFields = { ...failedFields, invalidMotherFields };
    }
    /* const invalidSpouseFields = SpouseFieldsValidations(formData);
    if (Object.keys(invalidSpouseFields).length > 0) {
      failedFields = { ...failedFields, invalidSpouseFields };
    } */
    const invalidReligionFields = ReligionValidations(formData);
    if (Object.keys(invalidReligionFields).length > 0) {
      failedFields = { ...failedFields, invalidReligionFields };
    }
    const invalidCategoryFields = CategoryValidations(formData);
    if (Object.keys(invalidCategoryFields).length > 0) {
      failedFields = { ...failedFields, invalidCategoryFields };
    }
    const invalidOccupationFields = OccupationValidations(formData);
    if (Object.keys(invalidOccupationFields).length > 0) {
      failedFields = { ...failedFields, invalidOccupationFields };
    }
    const invalidJntHolderFields = AllJointHolderValidations(
      formData,
      formName
    );
    if (Object.keys(invalidJntHolderFields).length > 0) {
      failedFields = { ...failedFields, invalidJntHolderFields };
    }
  }

  if (failedFields && Object.keys(failedFields).length > 0) {
    return failedFields;
  } else {
    callInsertAPIFunc();
  }
}

export default FormValidations;
