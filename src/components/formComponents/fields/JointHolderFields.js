import React from 'react';
import deleteButton from '../../icons/blue-delete-button.png';
import '../../../css/Common.css';
import '../../../css/Buttons.css';

import AllJH1Fields from './AllJH1Fields';
import AllJH2Fields from './AllJH2Fields';
import AllJH4Fields from './AllJH4Fields';
import AllJH3Fields from './AllJH3Fields';

const JointHolderFields = ({ index, onDelete, classToBeApplied, formData }) => {
  let jntHolderNum = 'scnd';
  let jntHolderTitle = 'Second Holder Details';

  //index = 0 on click od Add. When we add indices, it will increase by 1. So for 4th JH, index will be 3
  if (index) {
    if (index === 1) {
      jntHolderNum = 'thrd';
      jntHolderTitle = 'Third Holder Details';
    }
    if (index === 2) {
      jntHolderNum = 'forth';
      jntHolderTitle = 'Forth Holder Details';
    }
    if (index === 3) {
      jntHolderNum = 'fifth';
      jntHolderTitle = 'Fifth Holder Details';
    }
  }

  const handleDelete = () => {
    /* alert(index); */
    onDelete(index);
  };

  return (
    <div>
      <h3>{jntHolderTitle}</h3>
      <img
        src={deleteButton}
        onClick={handleDelete}
        className={
          formData.joint_holder_length === index
            ? 'delete-icon cursor-pointer'
            : 'hide-me'
        }
        alt="Blue Delete Button"
      />
      {/* Second */}
      {jntHolderNum === 'scnd' && (
        <AllJH1Fields formData={formData} classToBeApplied={classToBeApplied} />
      )}

      {/* Third */}
      {jntHolderNum === 'thrd' && (
        <AllJH2Fields formData={formData} classToBeApplied={classToBeApplied} />
      )}

      {/* Forth */}
      {jntHolderNum === 'forth' && (
        <AllJH3Fields formData={formData} classToBeApplied={classToBeApplied} />
      )}

      {/* Fifth */}
      {jntHolderNum === 'fifth' && (
        <AllJH4Fields formData={formData} classToBeApplied={classToBeApplied} />
      )}
    </div>
  );
};

export default JointHolderFields;
