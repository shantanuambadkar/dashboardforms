import React, { useState } from 'react';
import { Button } from '@mui/material';
import '../../css/Dashboard.css';
import CallCountAPI from '../actions/dashboardCallAllAPIs/CallCountAPI';
import CallGridAPI from '../../apiAction/dashboardAPIs/CallGridAPI';
import { useUser } from '../../context/UserContext';
import PassFormNamesInAPI from '../formComponents/reusableComponents/PassFormNamesInAPI';
import FailurePopup from '../../pages/FailurePopup';

const FormButtons = () => {
  const {
    user,
    setFormName,
    DBPeriod,
    DBPageNo,
    DBBranchVal,
    setCounts,
    setDBList,
  } = useUser();

  const [activeButton, setActiveButton] = useState('savings');

  async function handleButtonClick(e) {
    setActiveButton(e);
    setFormName(PassFormNamesInAPI(e));

    //Call APIs here

    let countObjToBePassed = {
      subdomain: user.BankShortName,
      formName: PassFormNamesInAPI(e),
      userRole: user.Role,
      userBranch: DBBranchVal,
      userEmail: user.Email,
      fromDate: DBPeriod,
      pageNo: DBPageNo,
    };

    try {
      await Promise.all([
        CallCountAPI(countObjToBePassed, setCounts),
        CallGridAPI(countObjToBePassed, setDBList),
      ]);
    } catch (e) {
      FailurePopup(
        'Dashboard Form Button',
        'Error in calling Count & Grid API wrappers on Dashboard Form Button'
      );
      console.log(
        'Error in calling Count & Grid API wrappers from Dashboard Form Button',
        e
      );
    }
  }

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
