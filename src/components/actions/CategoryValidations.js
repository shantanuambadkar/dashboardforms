const CategoryValidations = (formData) => {
  let failedCategoryFields = {};

  if (
    !formData.category_fst_account_holder ||
    formData.category_fst_account_holder === ''
  ) {
    failedCategoryFields = {
      ...failedCategoryFields,
      category_fst_account_holder: 'Category is invalid or empty',
    };
  } else {
    if (
      formData.category_fst_account_holder === 'OTHER' &&
      (!formData.other_category_fst_account_holder ||
        formData.other_category_fst_account_holder === '')
    ) {
      failedCategoryFields = {
        ...failedCategoryFields,
        other_category_fst_account_holder: 'Other Category is invalid or empty',
      };
    }
  }

  return failedCategoryFields;
};

export default CategoryValidations;
