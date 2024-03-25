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

function FatherNameFields({ formName, formData, classToBeApplied }) {
  const fatherTitleDDValues = Dropdowns('title');

  function handleChangeCustFatherSalutation(e) {
    formData.title_father_fst_account_holder = UpCase(e.target.value);
  }
  function handleChangeCustFatherFName(e) {
    formData.fname_father_fst_account_holder = UpCase(e.target.value);
  }
  function handleChangeCustFatherMName(e) {
    formData.mname_father_fst_account_holder = UpCase(e.target.value);
  }
  function handleChangeCustFatherLName(e) {
    formData.lname_father_fst_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <h5>Father's Details</h5>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="custFatherSalutation">Title *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeCustFatherSalutation}
            inputProps={{
              name: 'custFatherSalutation',
              id: 'custFatherSalutation',
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
              name: 'custFatherFirstName',
              id: 'custFatherFirstName',
              maxLength: 30,
            }}
            label="First Name"
            onChange={handleChangeCustFatherFName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'custFatherMiddleName',
              id: 'custFatherMiddleName',
              maxLength: 30,
            }}
            label="Middle Name"
            onChange={handleChangeCustFatherMName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'custFatherLastName',
              id: 'custFatherLastName',
              maxLength: 30,
            }}
            label="Last Name"
            onChange={handleChangeCustFatherLName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default FatherNameFields;
