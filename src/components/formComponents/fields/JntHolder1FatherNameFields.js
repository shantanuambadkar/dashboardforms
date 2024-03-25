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

function JntHolder1FatherNameFields({ formData, classToBeApplied }) {
  const fatherTitleDDValues = Dropdowns('title');

  function handleChangeScndHolderFatherSalutation(e) {
    formData.title_father_scnd_account_holder = UpCase(e.target.value);
  }
  function handleChangeScndHolderFatherFName(e) {
    formData.fname_father_scnd_account_holder = UpCase(e.target.value);
  }
  function handleChangeScndHolderFatherMName(e) {
    formData.mname_father_scnd_account_holder = UpCase(e.target.value);
  }
  function handleChangeScndHolderFatherLName(e) {
    formData.lname_father_scnd_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <h5>Father's Details</h5>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="scndHolderFatherSalutation">Title *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeScndHolderFatherSalutation}
            inputProps={{
              name: 'scndHolderFatherSalutation',
              id: 'scndHolderFatherSalutation',
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
              name: 'scndHolderFatherFirstName',
              id: 'scndHolderFatherFirstName',
              maxLength: 30,
            }}
            label="First Name"
            onChange={handleChangeScndHolderFatherFName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'scndHolderFatherMiddleName',
              id: 'scndHolderFatherMiddleName',
              maxLength: 30,
            }}
            label="Middle Name"
            onChange={handleChangeScndHolderFatherMName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'scndHolderFatherLastName',
              id: 'scndHolderFatherLastName',
              maxLength: 30,
            }}
            label="Last Name"
            onChange={handleChangeScndHolderFatherLName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder1FatherNameFields;
