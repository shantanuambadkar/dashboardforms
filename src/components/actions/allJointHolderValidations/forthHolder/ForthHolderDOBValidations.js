import DOBValidations from '../../DOBValidations';

const ForthHolderDOBValidations = (formData, formName) => {
  let failedForthHolderDOBFields = {};

  if (
    !formData.dob_forth_account_holder ||
    formData.dob_forth_account_holder === '' ||
    (formData.dob_forth_account_holder &&
      !DOBValidations(
        formData.dob_forth_account_holder,
        formName,
        'majorIndividual'
      ))
  ) {
    failedForthHolderDOBFields = {
      ...failedForthHolderDOBFields,
      dob_forth_account_holder: 'DOB is invalid or empty',
    };
  }

  return failedForthHolderDOBFields;
};

export default ForthHolderDOBValidations;
