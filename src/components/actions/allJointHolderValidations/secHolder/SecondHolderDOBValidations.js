import DOBValidations from '../../DOBValidations';

const SecondHolderDOBValidations = (formData, formName) => {
  let failedSecondHolderDOBFields = {};

  if (
    !formData.dob_scnd_account_holder ||
    formData.dob_scnd_account_holder === '' ||
    (formData.dob_scnd_account_holder &&
      !DOBValidations(
        formData.dob_scnd_account_holder,
        formName,
        'majorIndividual'
      ))
  ) {
    failedSecondHolderDOBFields = {
      ...failedSecondHolderDOBFields,
      dob_scnd_account_holder: 'DOB is invalid or empty',
    };
  }

  return failedSecondHolderDOBFields;
};

export default SecondHolderDOBValidations;
