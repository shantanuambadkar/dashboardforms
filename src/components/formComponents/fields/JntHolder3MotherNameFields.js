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

function JntHolder3MotherNameFields({ formData, classToBeApplied }) {
  const motherTitleDDValues = Dropdowns('title');

  function handleChangeForthHolderMotherSalutation(e) {
    formData.title_mother_forth_account_holder = UpCase(e.target.value);
  }
  function handleChangeForthHolderMotherFName(e) {
    formData.fname_mother_forth_account_holder = UpCase(e.target.value);
  }
  function handleChangeForthHolderMotherMName(e) {
    formData.mname_mother_forth_account_holder = UpCase(e.target.value);
  }
  function handleChangeForthHolderMotherLName(e) {
    formData.lname_mother_forth_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <h5>Mother's Details</h5>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="forthHolderMotherSalutation">Title *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeForthHolderMotherSalutation}
            inputProps={{
              name: 'forthHolderMotherSalutation',
              id: 'forthHolderMotherSalutation',
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
              name: 'forthHolderMotherFirstName',
              id: 'forthHolderMotherFirstName',
              maxLength: 30,
            }}
            label="First Name"
            onChange={handleChangeForthHolderMotherFName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'forthHolderMotherMiddleName',
              id: 'forthHolderMotherMiddleName',
              maxLength: 30,
            }}
            label="Middle Name"
            onChange={handleChangeForthHolderMotherMName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'forthHolderMotherLastName',
              id: 'forthHolderMotherLastName',
              maxLength: 30,
            }}
            label="Last Name"
            onChange={handleChangeForthHolderMotherLName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder3MotherNameFields;
