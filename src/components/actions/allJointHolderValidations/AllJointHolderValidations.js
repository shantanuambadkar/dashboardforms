import SecondHolderValidations from './secHolder/SecondHolderValidations';
import ThirdHolderValidations from './thrdHolder/ThirdHolderValidations';
import ForthHolderValidations from './forthHolder/ForthHolderValidations';
import FifthHolderValidations from './fifthHolder/FifthHolderValidations';

const AllJointHolderValidations = (formData, formName) => {
  let jointHolderFailedFields = {};

  let secondHolderFailedFields = SecondHolderValidations(formData, formName);
  let thirdHolderFailedFields = ThirdHolderValidations(formData, formName);
  let forthHolderFailedFields = ForthHolderValidations(formData, formName);
  let fifthHolderFailedFields = FifthHolderValidations(formData, formName);

  if (formData.joint_holder_flag) {
    if (formData.joint_holder_length < 0) {
      jointHolderFailedFields = {
        ...jointHolderFailedFields,
        joint_holder_flag: 'Please add atleast 1 Joint Holder',
      };
    }

    if (formData.joint_holder_length === 0) {
      if (Object.keys(secondHolderFailedFields).length > 0) {
        jointHolderFailedFields = {
          ...jointHolderFailedFields,
          scnd_holder_errors: 'Second Holder Errors',
        };
      }
    }

    if (formData.joint_holder_length === 1) {
      if (Object.keys(secondHolderFailedFields).length > 0) {
        jointHolderFailedFields = {
          ...jointHolderFailedFields,
          scnd_holder_errors: 'Second Holder Errors',
        };
      }

      if (Object.keys(thirdHolderFailedFields).length > 0) {
        jointHolderFailedFields = {
          ...jointHolderFailedFields,
          thrd_holder_errors: 'Third Holder Errors',
        };
      }
    }

    if (formData.joint_holder_length === 2) {
      if (Object.keys(secondHolderFailedFields).length > 0) {
        jointHolderFailedFields = {
          ...jointHolderFailedFields,
          scnd_holder_errors: 'Second Holder Errors',
        };
      }

      if (Object.keys(thirdHolderFailedFields).length > 0) {
        jointHolderFailedFields = {
          ...jointHolderFailedFields,
          thrd_holder_errors: 'Third Holder Errors',
        };
      }

      if (Object.keys(forthHolderFailedFields).length > 0) {
        jointHolderFailedFields = {
          ...jointHolderFailedFields,
          forth_holder_errors: 'Forth Holder Errors',
        };
      }
    }

    if (formData.joint_holder_length >= 3) {
      if (Object.keys(secondHolderFailedFields).length > 0) {
        jointHolderFailedFields = {
          ...jointHolderFailedFields,
          scnd_holder_errors: 'Second Holder Errors',
        };
      }

      if (Object.keys(thirdHolderFailedFields).length > 0) {
        jointHolderFailedFields = {
          ...jointHolderFailedFields,
          thrd_holder_errors: 'Third Holder Errors',
        };
      }

      if (Object.keys(forthHolderFailedFields).length > 0) {
        jointHolderFailedFields = {
          ...jointHolderFailedFields,
          forth_holder_errors: 'Forth Holder Errors',
        };
      }

      if (Object.keys(fifthHolderFailedFields).length > 0) {
        jointHolderFailedFields = {
          ...jointHolderFailedFields,
          fifth_holder_errors: 'Fifth Holder Errors',
        };
      }
    }
  } else {
    jointHolderFailedFields = {};
    //Clear All Joint Holders logic will be called from here
  }

  return jointHolderFailedFields;
};

export default AllJointHolderValidations;
