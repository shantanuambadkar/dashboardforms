import React from 'react';
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import UpCase from './UpCase';
import '../../../css/Common.css';
import '../../../css/Fields.css';
import Dropdowns from '../reusableComponents/Dropdowns';

function CustomerNameFields({ classToBeApplied, formData, errorClassTofield }) {
  const salutationDDValues = Dropdowns('title');

  function dropdownOnChange(e) {
    formData.title_account_holder = UpCase(e.target.value);
  }
  function handleChangeCustFirstName(e) {
    formData.fname_account_holder = UpCase(e.target.value);
  }
  function handleChangeCustMiddleName(e) {
    formData.mname_account_holder = UpCase(e.target.value);
  }
  function handleChangeCustLastName(e) {
    formData.lname_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel id="titleDropdown" htmlFor="title_account_holder">
            Title *
          </InputLabel>
          <Select
            required
            className={
              errorClassTofield === 'title_account_holder'
                ? errorClassTofield + ' ' + classToBeApplied
                : classToBeApplied
            }
            inputProps={{
              name: 'title_account_holder',
              id: 'title_account_holder',
            }}
            onChange={dropdownOnChange}
            /* value={formData.title_account_holder} */
          >
            {salutationDDValues.map((value) => {
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
            required
            className={
              errorClassTofield === 'fname_account_holder'
                ? 'text-error ' + classToBeApplied
                : classToBeApplied
            }
            inputProps={{
              name: 'fname_account_holder',
              id: 'fname_account_holder',
            }}
            label="First Name"
            onChange={handleChangeCustFirstName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'mname_account_holder',
              id: 'mname_account_holder',
            }}
            label="Middle Name"
            onChange={handleChangeCustMiddleName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'lname_account_holder',
              id: 'lname_account_holder',
            }}
            label="Last Name"
            onChange={handleChangeCustLastName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default CustomerNameFields;
