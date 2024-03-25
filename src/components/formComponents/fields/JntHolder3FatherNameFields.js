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

function JntHolder3FatherNameFields({ formData, classToBeApplied }) {
  const fatherTitleDDValues = Dropdowns('title');

  function handleChangeForthHolderFatherSalutation(e) {
    formData.title_father_forth_account_holder = UpCase(e.target.value);
  }
  function handleChangeForthHolderFatherFName(e) {
    formData.fname_father_forth_account_holder = UpCase(e.target.value);
  }
  function handleChangeForthHolderFatherMName(e) {
    formData.mname_father_forth_account_holder = UpCase(e.target.value);
  }
  function handleChangeForthHolderFatherLName(e) {
    formData.lname_father_forth_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <h5>Father's Details</h5>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="forthHolderFatherSalutation">Title *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeForthHolderFatherSalutation}
            inputProps={{
              name: 'forthHolderFatherSalutation',
              id: 'forthHolderFatherSalutation',
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
              name: 'forthHolderFatherFirstName',
              id: 'forthHolderFatherFirstName',
              maxLength: 30,
            }}
            label="First Name"
            onChange={handleChangeForthHolderFatherFName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'forthHolderFatherMiddleName',
              id: 'forthHolderFatherMiddleName',
              maxLength: 30,
            }}
            label="Middle Name"
            onChange={handleChangeForthHolderFatherMName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'forthHolderFatherLastName',
              id: 'forthHolderFatherLastName',
              maxLength: 30,
            }}
            label="Last Name"
            onChange={handleChangeForthHolderFatherLName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder3FatherNameFields;
