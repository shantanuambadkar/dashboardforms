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

function JntHolder2MotherNameFields({ formData, classToBeApplied }) {
  const motherTitleDDValues = Dropdowns('title');

  function handleChangeThrdHolderMotherSalutation(e) {
    formData.title_mother_thrd_account_holder = UpCase(e.target.value);
  }
  function handleChangeThrdHolderMotherFName(e) {
    formData.fname_mother_thrd_account_holder = UpCase(e.target.value);
  }
  function handleChangeThrdHolderMotherMName(e) {
    formData.mname_mother_thrd_account_holder = UpCase(e.target.value);
  }
  function handleChangeThrdHolderMotherLName(e) {
    formData.lname_mother_thrd_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <h5>Mother's Details</h5>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="thrdHolderMotherSalutation">Title *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeThrdHolderMotherSalutation}
            inputProps={{
              name: 'thrdHolderMotherSalutation',
              id: 'thrdHolderMotherSalutation',
            }}
          >
            {motherTitleDDValues.map((value) => {
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
              name: 'thrdHolderMotherFirstName',
              id: 'thrdHolderMotherFirstName',
              maxLength: 30,
            }}
            label="First Name"
            onChange={handleChangeThrdHolderMotherFName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'thrdHolderMotherMiddleName',
              id: 'thrdHolderMotherMiddleName',
              maxLength: 30,
            }}
            label="Middle Name"
            onChange={handleChangeThrdHolderMotherMName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'thrdHolderMotherLastName',
              id: 'thrdHolderMotherLastName',
              maxLength: 30,
            }}
            label="Last Name"
            onChange={handleChangeThrdHolderMotherLName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder2MotherNameFields;
