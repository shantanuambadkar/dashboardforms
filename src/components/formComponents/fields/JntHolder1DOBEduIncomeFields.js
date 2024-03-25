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

function JntHolder1DOBEduIncomeFields({ formData, classToBeApplied }) {
  const scndHolderMarStatusDDValue = Dropdowns('maritalStatus');
  const scndHolderEducationDDValue = Dropdowns('education');

  function handleDOBChange(e) {
    formData.dob_scnd_account_holder = UpCase(e.target.value);
  }
  function handleChangeScndHolderEducation(e) {
    formData.qualification_scnd_account_holder = UpCase(e.target.value);
  }
  function handleChangeScndHolderAnnualIncome(e) {
    formData.annual_income_scnd_account_holder = UpCase(e.target.value);
  }
  function handleChangeScndHolderMarStatus(e) {
    formData.marital_status_scnd_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <TextField
            required
            id="scndHolderDob"
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
          <InputLabel htmlFor="scndHolderEducation">
            Educational Qualification
          </InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeScndHolderEducation}
            inputProps={{
              name: 'scndHolderEducation',
              id: 'scndHolderEducation',
            }}
          >
            {scndHolderEducationDDValue.map((value) => {
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
              name: 'scndHolderAnnualIncome',
              id: 'scndHolderAnnualIncome',
            }}
            label="Annual Income"
            onChange={handleChangeScndHolderAnnualIncome}
          />
        </Grid>
        <Grid item xs={3}>
          <InputLabel htmlFor="scndHolderMarStatus">Marital Status</InputLabel>
          <Select
            className="field-width"
            onChange={handleChangeScndHolderMarStatus}
            inputProps={{
              name: 'scndHolderMarStatus',
              id: 'scndHolderMarStatus',
            }}
          >
            {scndHolderMarStatusDDValue.map((value) => {
              return <MenuItem value={value}>{value}</MenuItem>;
            })}
          </Select>
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder1DOBEduIncomeFields;
