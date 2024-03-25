import DOBValidations from '../../DOBValidations';

const FifthHolderDOBValidations = (formData, formName) => {
  let failedFifthHolderDOBFields = {};

  if (
    !formData.dob_fifth_account_holder ||
    formData.dob_fifth_account_holder === '' ||
    (formData.dob_fifth_account_holder &&
      !DOBValidations(
        formData.dob_fifth_account_holder,
        formName,
        'majorIndividual'
      ))
  ) {
    failedFifthHolderDOBFields = {
      ...failedFifthHolderDOBFields,
      dob_fifth_account_holder: 'DOB is invalid or empty',
    };
  }

  return failedFifthHolderDOBFields;
};

export default FifthHolderDOBValidations;
