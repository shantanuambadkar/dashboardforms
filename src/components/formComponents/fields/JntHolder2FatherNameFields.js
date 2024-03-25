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

function JntHolder2FatherNameFields({ formData, classToBeApplied }) {
  const fatherTitleDDValues = Dropdowns('title');

  function handleChangeThrdHolderFatherSalutation(e) {
    formData.title_father_thrd_account_holder = UpCase(e.target.value);
  }
  function handleChangeThrdHolderFatherFName(e) {
    formData.fname_father_thrd_account_holder = UpCase(e.target.value);
  }
  function handleChangeThrdHolderFatherMName(e) {
    formData.mname_father_thrd_account_holder = UpCase(e.target.value);
  }
  function handleChangeThrdHolderFatherLName(e) {
    formData.lname_father_thrd_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <h5>Father's Details</h5>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="thrdHolderFatherSalutation">Title *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeThrdHolderFatherSalutation}
            inputProps={{
              name: 'thrdHolderFatherSalutation',
              id: 'thrdHolderFatherSalutation',
            }}
          >
            {fatherTitleDDValues.map((value) => {
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
            className={classToBeApplied}
            inputProps={{
              name: 'thrdHolderFatherFirstName',
              id: 'thrdHolderFatherFirstName',
              maxLength: 30,
            }}
            label="First Name"
            onChange={handleChangeThrdHolderFatherFName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'thrdHolderFatherMiddleName',
              id: 'thrdHolderFatherMiddleName',
              maxLength: 30,
            }}
            label="Middle Name"
            onChange={handleChangeThrdHolderFatherMName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'thrdHolderFatherLastName',
              id: 'thrdHolderFatherLastName',
              maxLength: 30,
            }}
            label="Last Name"
            onChange={handleChangeThrdHolderFatherLName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder2FatherNameFields;
