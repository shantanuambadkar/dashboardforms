const ThirdHolderCategoryValidations = (formData) => {
  let thrdHolderCategoryFailedFields = {};

  if (
    !formData.category_thrd_account_holder ||
    formData.category_thrd_account_holder === ''
  ) {
    thrdHolderCategoryFailedFields = {
      ...thrdHolderCategoryFailedFields,
      category_thrd_account_holder: 'Category is empty or invalid',
    };
  } else {
    if (
      formData.category_thrd_account_holder === 'OTHER' &&
      (!formData.other_category_thrd_account_holder ||
        formData.other_category_thrd_account_holder === '')
    ) {
      thrdHolderCategoryFailedFields = {
        ...thrdHolderCategoryFailedFields,
        other_category_thrd_account_holder:
          'Other Category is empty or invalid',
      };
    }
  }
  return thrdHolderCategoryFailedFields;
};

export default ThirdHolderCategoryValidations;
