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

function JntHolder4DOBEduIncomeFields({ formData, classToBeApplied }) {
  const fifthHolderMarStatusDDValue = Dropdowns('maritalStatus');
  const fifthHolderEducationDDValue = Dropdowns('education');

  function handleDOBChange(e) {
    formData.dob_fifth_account_holder = UpCase(e.target.value);
  }
  function handleChangeFifthHolderEducation(e) {
    formData.qualification_fifth_account_holder = UpCase(e.target.value);
  }
  function handleChangeFifthHolderAnnualIncome(e) {
    formData.annual_income_fifth_account_holder = UpCase(e.target.value);
  }
  function handleChangeFifthHolderMarStatus(e) {
    formData.marital_status_fifth_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <TextField
            required
            id="fifthHolderDob"
            label="DOB"
            type="date"
            className={classToBeApplied}
            onChange={handleDOBChange}
            sx={{ width: 445 }}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              max: DateFormat(new Date()),
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <InputLabel htmlFor="fifthHolderEducation">
            Educational Qualification
          </InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeFifthHolderEducation}
            inputProps={{
              name: 'fifthHolderEducation',
              id: 'fifthHolderEducation',
            }}
          >
            {fifthHolderEducationDDValue.map((value) => {
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
              name: 'fifthHolderAnnualIncome',
              id: 'fifthHolderAnnualIncome',
            }}
            label="Annual Income"
            onChange={handleChangeFifthHolderAnnualIncome}
          />
        </Grid>
        <Grid item xs={3}>
          <InputLabel htmlFor="fifthHolderMarStatus">Marital Status</InputLabel>
          <Select
            className="field-width"
            onChange={handleChangeFifthHolderMarStatus}
            inputProps={{
              name: 'fifthHolderMarStatus',
              id: 'fifthHolderMarStatus',
            }}
          >
            {fifthHolderMarStatusDDValue.map((value) => {
              return <MenuItem value={value}>{value}</MenuItem>;
            })}
          </Select>
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder4DOBEduIncomeFields;
