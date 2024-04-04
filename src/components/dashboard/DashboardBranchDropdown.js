import '../../css/Common.css';
import '../../css/Fields.css';
import Dropdowns from '../formComponents/reusableComponents/Dropdowns';
import { Grid, Select, MenuItem, InputLabel } from '@material-ui/core';
import { useUser } from '../../context/UserContext';
import UpCase from '../formComponents/fields/UpCase';
import { useState } from 'react';
import CallCountAPI from '../actions/dashboardCallAllAPIs/CallCountAPI';
import CallGridAPI from '../../apiAction/dashboardAPIs/CallGridAPI';
import FailurePopup from '../../pages/FailurePopup';

function DashboardBranchDropdown({ classToBeApplied }) {
  const branchDD = Dropdowns('dbBranch');
  const {
    user,
    formName,
    DBPageNo,
    DBBranchVal,
    setDBBranchVal,
    DBPeriod,
    setCounts,
    setDBList,
  } = useUser();

  const [selectedDBBranch, setSelectedDBBranch] = useState(UpCase(DBBranchVal));

  async function handleDBBranchChange(e) {
    setSelectedDBBranch(UpCase(e.target.value));
    setDBBranchVal(e.target.value);
    //Call APIs here

    let countObjToBePassed = {
      subdomain: user.BankShortName,
      formName: formName,
      userRole: user.Role,
      userBranch: e.target.value,
      userEmail: user.Email,
      fromDate: DBPeriod,
      pageNo: DBPageNo,
    };

    /* console.log('countObjToBePassed', countObjToBePassed); */

    try {
      await Promise.all([
        CallCountAPI(countObjToBePassed, setCounts),
        CallGridAPI(countObjToBePassed, setDBList),
      ]);
    } catch (e) {
      FailurePopup(
        'Dashboard Branch Dropdown',
        'Error in calling Count & Grid API wrappers on Dashboard Branch Dropdown'
      );
      console.log(
        'Error in calling Count & Grid API wrappers from Dashboard Branch Dropdown',
        e
      );
    }
  }

  return (
    <Grid container className="textFieldFormTop">
      <Grid item xs={12}>
        <InputLabel id="dbBranchDropdown" htmlFor="dbBranch">
          Branch *
        </InputLabel>
        <Select
          required
          className={classToBeApplied}
          inputProps={{
            name: 'dbBranch',
            id: 'dbBranch',
          }}
          value={selectedDBBranch}
          onChange={handleDBBranchChange}
        >
          {branchDD.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
    </Grid>
  );
}

export default DashboardBranchDropdown;
