const SecondHolderCategoryValidations = (formData) => {
  let secHolderCategoryFailedFields = {};

  if (
    !formData.category_scnd_account_holder ||
    formData.category_scnd_account_holder === ''
  ) {
    secHolderCategoryFailedFields = {
      ...secHolderCategoryFailedFields,
      category_scnd_account_holder: 'Category is empty or invalid',
    };
  } else {
    if (
      formData.category_scnd_account_holder === 'OTHER' &&
      (!formData.other_category_scnd_account_holder ||
        formData.other_category_scnd_account_holder === '')
    ) {
      secHolderCategoryFailedFields = {
        ...secHolderCategoryFailedFields,
        other_category_scnd_account_holder:
          'Other Category is empty or invalid',
      };
    }
  }
  return secHolderCategoryFailedFields;
};

export default SecondHolderCategoryValidations;
