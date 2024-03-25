import React, { useState } from 'react';
import '../../css/Common.css';
import '../../css/Buttons.css';
import '../../css/Checkbox.css';
import { Button } from '@material-ui/core';

function Buttons({
  btnLabel,
  onClick,
  classToBeApplied,
  btnType,
  btnVariant,
  btnColor,
  showCheckbox,
  checkboxLabel,
}) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange(e) {
    const checked = e.target.checked;
    setIsChecked(checked);
  }

  return (
    <div>
      <div className={showCheckbox ? 'divMargin' : 'hide-me'}>
        <label className="checkbox-font">
          <input
            type="checkbox"
            id="agreementCheck"
            className="checkbox-custom"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          {checkboxLabel}
          <br />
        </label>
      </div>
      <div className="flex-center-heading">
        <Button
          type={btnType}
          variant={btnVariant}
          color={btnColor}
          onClick={onClick}
          className={classToBeApplied}
          disabled={showCheckbox && !isChecked ? true : false}
        >
          {btnLabel ? btnLabel : ''}
        </Button>
      </div>
    </div>
  );
}

export default Buttons;
