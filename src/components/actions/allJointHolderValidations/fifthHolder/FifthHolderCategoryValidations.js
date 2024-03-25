const FifthHolderCategoryValidations = (formData) => {
  let fifthHolderCategoryFailedFields = {};

  if (
    !formData.category_fifth_account_holder ||
    formData.category_fifth_account_holder === ''
  ) {
    fifthHolderCategoryFailedFields = {
      ...fifthHolderCategoryFailedFields,
      category_fifth_account_holder: 'Category is empty or invalid',
    };
  } else {
    if (
      formData.category_fifth_account_holder === 'OTHER' &&
      (!formData.other_category_fifth_account_holder ||
        formData.other_category_fifth_account_holder === '')
    ) {
      fifthHolderCategoryFailedFields = {
        ...fifthHolderCategoryFailedFields,
        other_category_fifth_account_holder:
          'Other Category is empty or invalid',
      };
    }
  }
  return fifthHolderCategoryFailedFields;
};

export default FifthHolderCategoryValidations;
