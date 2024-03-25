import React from 'react';
import Dropdowns from '../reusableComponents/Dropdowns';
import UpCase from './UpCase';
import '../../../css/Common.css';
import '../../../css/Fields.css';
import {
  Grid,
  TextField,
  MenuItem,
  Select,
  InputLabel,
} from '@material-ui/core';
import DateFormat from '../../actions/DateFormat';

function JntHolder2DOBEduIncomeFields({ formData, classToBeApplied }) {
  const thrdHolderMarStatusDDValue = Dropdowns('maritalStatus');
  const thrdHolderEducationDDValue = Dropdowns('education');

  function handleDOBChange(e) {
    formData.dob_thrd_account_holder = UpCase(e.target.value);
  }
  function handleChangeThrdHolderEducation(e) {
    formData.qualification_thrd_account_holder = UpCase(e.target.value);
  }
  function handleChangeThrdHolderAnnualIncome(e) {
    formData.annual_income_thrd_account_holder = UpCase(e.target.value);
  }
  function handleChangeThrdHolderMarStatus(e) {
    formData.marital_status_thrd_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <TextField
            required
            id="thrdHolderDob"
            label="DOB"
            type="date"
            className={classToBeApplied}
            onChange={handleDOBChange}
            sx={{ width: 225 }}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              max: DateFormat(new Date()),
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <InputLabel htmlFor="thrdHolderEducation">
            Educational Qualification
          </InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeThrdHolderEducation}
            inputProps={{
              name: 'thrdHolderEducation',
              id: 'thrdHolderEducation',
            }}
          >
            {thrdHolderEducationDDValue.map((value) => {
              return (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'thrdHolderAnnualIncome',
              id: 'thrdHolderAnnualIncome',
            }}
            label="Annual Income"
            onChange={handleChangeThrdHolderAnnualIncome}
          />
        </Grid>
        <Grid item xs={3}>
          <InputLabel htmlFor="thrdHolderMarStatus">Marital Status</InputLabel>
          <Select
            className="field-width"
            onChange={handleChangeThrdHolderMarStatus}
            inputProps={{
              name: 'thrdHolderMarStatus',
              id: 'thrdHolderMarStatus',
            }}
          >
            {thrdHolderMarStatusDDValue.map((value) => {
              return <MenuItem value={value}>{value}</MenuItem>;
            })}
          </Select>
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder2DOBEduIncomeFields;
