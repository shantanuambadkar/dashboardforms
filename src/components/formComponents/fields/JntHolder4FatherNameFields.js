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

function JntHolder4FatherNameFields({ formData, classToBeApplied }) {
  const fatherTitleDDValues = Dropdowns('title');

  function handleChangeFifthHolderFatherSalutation(e) {
    formData.title_father_fifth_account_holder = UpCase(e.target.value);
  }
  function handleChangeFifthHolderFatherFName(e) {
    formData.fname_father_fifth_account_holder = UpCase(e.target.value);
  }
  function handleChangeFifthHolderFatherMName(e) {
    formData.mname_father_fifth_account_holder = UpCase(e.target.value);
  }
  function handleChangeFifthHolderFatherLName(e) {
    formData.lname_father_fifth_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <h5>Father's Details</h5>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="fifthHolderFatherSalutation">Title *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeFifthHolderFatherSalutation}
            inputProps={{
              name: 'fifthHolderFatherSalutation',
              id: 'fifthHolderFatherSalutation',
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
              name: 'fifthHolderFatherFirstName',
              id: 'fifthHolderFatherFirstName',
              maxLength: 30,
            }}
            label="First Name"
            onChange={handleChangeFifthHolderFatherFName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'fifthHolderFatherMiddleName',
              id: 'fifthHolderFatherMiddleName',
              maxLength: 30,
            }}
            label="Middle Name"
            onChange={handleChangeFifthHolderFatherMName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'fifthHolderFatherLastName',
              id: 'fifthHolderFatherLastName',
              maxLength: 30,
            }}
            label="Last Name"
            onChange={handleChangeFifthHolderFatherLName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder4FatherNameFields;
