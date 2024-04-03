import { Grid, Select, MenuItem, InputLabel } from '@material-ui/core';
import UpCase from '../formComponents/fields/UpCase';
import '../../css/Common.css';
import '../../css/Fields.css';
import Dropdowns from '../formComponents/reusableComponents/Dropdowns';
import { useUser } from '../../context/UserContext';
import CallCountAPI from '../actions/dashboardCallAllAPIs/CallCountAPI';
import CallGridAPI from '../../apiAction/dashboardAPIs/CallGridAPI';
import FailurePopup from '../../pages/FailurePopup';
import GetDateFromPeriod from '../formComponents/reusableComponents/GetDateFromPeriod';

function DashboardPeriodDropdown({ classToBeApplied /* onValueChange */ }) {
  const periodDDVal = Dropdowns('dbPeriod');

  const {
    user,
    setCounts,
    setDBList,
    formName,
    DBPeriod,
    DBPageNo,
    setDBPeriod,
    DBPeriodVal,
    setDBPeriodVal,
  } = useUser();

  async function handlePeriodChange(e) {
    console.log('DB Period Value', UpCase(e.target.value));
    /* onValueChange(UpCase(e.target.value)); */
    setDBPeriod(GetDateFromPeriod(UpCase(e.target.value)));
    setDBPeriodVal(UpCase(e.target.value));

    let countObjToBePassed = {
      subdomain: user.BankShortName,
      formName: formName,
      userRole: user.Role,
      userBranch: user.Branch,
      userEmail: user.Email,
      fromDate: GetDateFromPeriod(UpCase(e.target.value)),
      pageNo: DBPageNo,
    };

    console.log('countObjToBePassed', countObjToBePassed);

    try {
      await Promise.all([
        CallCountAPI(countObjToBePassed, setCounts),
        CallGridAPI(countObjToBePassed, setDBList),
      ]);
    } catch (e) {
      FailurePopup(
        'Dashboard Period Dropdown',
        'Error in calling Count & Grid API wrappers on Dashboard Period Dropdown'
      );
      console.log(
        'Error in calling Count & Grid API wrappers from Dashboard Period Dropdown',
        e
      );
    }
  }

  return (
    <Grid container className="textFieldFormTop">
      <Grid item xs={12}>
        <InputLabel id="periodDropdown" htmlFor="period">
          Period *
        </InputLabel>
        <Select
          required
          className={classToBeApplied}
          inputProps={{
            name: 'period',
            id: 'period',
          }}
          value={DBPeriodVal}
          onChange={handlePeriodChange}
        >
          {periodDDVal.map((value) => {
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

export default DashboardPeriodDropdown;
