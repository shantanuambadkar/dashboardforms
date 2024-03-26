import React, { useState } from 'react';
import { Button } from '@mui/material';
import '../../css/Dashboard.css';

const FormButtons = () => {
  const [activeButton, setActiveButton] = useState('savings');

  const handleButtonClick = (value) => {
    setActiveButton(value);
  };

  return (
    <div className="flex-button-group">
      <Button
        variant={activeButton === 'savings' ? 'contained' : 'outlined'}
        onClick={() => handleButtonClick('savings')}
        className="button-group-margin"
      >
        Savings
      </Button>
      <Button
        variant={activeButton === 'current' ? 'contained' : 'outlined'}
        onClick={() => handleButtonClick('current')}
        className="button-group-margin"
      >
        Current
      </Button>
      <Button
        variant={activeButton === 'fd' ? 'contained' : 'outlined'}
        onClick={() => handleButtonClick('fd')}
        className="button-group-margin"
      >
        FD
      </Button>
      <Button
        variant={activeButton === 'pmsby' ? 'contained' : 'outlined'}
        onClick={() => handleButtonClick('pmsby')}
        className="button-group-margin"
      >
        PMSBY
      </Button>
      <Button
        variant={activeButton === 'pmjjby' ? 'contained' : 'outlined'}
        onClick={() => handleButtonClick('pmjjby')}
        className="button-group-margin"
      >
        PMJJBY
      </Button>
      <Button
        variant={activeButton === 'fastag' ? 'contained' : 'outlined'}
        onClick={() => handleButtonClick('fastag')}
        className="button-group-margin"
      >
        FasTag
      </Button>
    </div>
  );
};

export default FormButtons;
