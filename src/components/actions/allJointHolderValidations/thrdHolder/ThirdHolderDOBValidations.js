import DOBValidations from '../../DOBValidations';

const ThirdHolderDOBValidations = (formData, formName) => {
  let failedThirdHolderDOBFields = {};

  if (
    !formData.dob_thrd_account_holder ||
    formData.dob_thrd_account_holder === '' ||
    (formData.dob_thrd_account_holder &&
      !DOBValidations(
        formData.dob_thrd_account_holder,
        formName,
        'majorIndividual'
      ))
  ) {
    failedThirdHolderDOBFields = {
      ...failedThirdHolderDOBFields,
      dob_thrd_account_holder: 'DOB is invalid or empty',
    };
  }

  return failedThirdHolderDOBFields;
};

export default ThirdHolderDOBValidations;
