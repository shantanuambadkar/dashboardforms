const PoliticalExposureValidations = (formData) => {
  let polExpFailedFields = {};

  if (
    !formData.political_exposure_fst_account_holder ||
    formData.political_exposure_fst_account_holder === ''
  ) {
    polExpFailedFields = {
      ...polExpFailedFields,
      political_exposure_fst_account_holder:
        'Political Exposure is empty or invalid',
    };
  }
  return polExpFailedFields;
};

export default PoliticalExposureValidations;
