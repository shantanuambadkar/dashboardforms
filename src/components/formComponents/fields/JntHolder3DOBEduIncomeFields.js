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

function JntHolder3DOBEduIncomeFields({ formData, classToBeApplied }) {
  const forthHolderMarStatusDDValue = Dropdowns('maritalStatus');
  const forthHolderEducationDDValue = Dropdowns('education');

  function handleDOBChange(e) {
    formData.dob_forth_account_holder = UpCase(e.target.value);
  }
  function handleChangeForthHolderEducation(e) {
    formData.qualification_forth_account_holder = UpCase(e.target.value);
  }
  function handleChangeForthHolderAnnualIncome(e) {
    formData.annual_income_forth_account_holder = UpCase(e.target.value);
  }
  function handleChangeForthHolderMarStatus(e) {
    formData.marital_status_forth_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <TextField
            required
            id="forthHolderDob"
            label="DOB"
            type="date"
            className={classToBeApplied}
            onChange={handleDOBChange}
            sx={{ width: 335 }}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              max: DateFormat(new Date()),
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <InputLabel htmlFor="forthHolderEducation">
            Educational Qualification
          </InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeForthHolderEducation}
            inputProps={{
              name: 'forthHolderEducation',
              id: 'forthHolderEducation',
            }}
          >
            {forthHolderEducationDDValue.map((value) => {
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
              name: 'forthHolderAnnualIncome',
              id: 'forthHolderAnnualIncome',
            }}
            label="Annual Income"
            onChange={handleChangeForthHolderAnnualIncome}
          />
        </Grid>
        <Grid item xs={3}>
          <InputLabel htmlFor="forthHolderMarStatus">Marital Status</InputLabel>
          <Select
            className="field-width"
            onChange={handleChangeForthHolderMarStatus}
            inputProps={{
              name: 'forthHolderMarStatus',
              id: 'forthHolderMarStatus',
            }}
          >
            {forthHolderMarStatusDDValue.map((value) => {
              return <MenuItem value={value}>{value}</MenuItem>;
            })}
          </Select>
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder3DOBEduIncomeFields;
