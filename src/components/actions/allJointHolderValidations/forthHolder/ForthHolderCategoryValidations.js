const ForthHolderCategoryValidations = (formData) => {
  let forthHolderCategoryFailedFields = {};

  if (
    !formData.category_forth_account_holder ||
    formData.category_forth_account_holder === ''
  ) {
    forthHolderCategoryFailedFields = {
      ...forthHolderCategoryFailedFields,
      category_forth_account_holder: 'Category is empty or invalid',
    };
  } else {
    if (
      formData.category_forth_account_holder === 'OTHER' &&
      (!formData.other_category_forth_account_holder ||
        formData.other_category_forth_account_holder === '')
    ) {
      forthHolderCategoryFailedFields = {
        ...forthHolderCategoryFailedFields,
        other_category_forth_account_holder:
          'Other Category is empty or invalid',
      };
    }
  }
  return forthHolderCategoryFailedFields;
};

export default ForthHolderCategoryValidations;
