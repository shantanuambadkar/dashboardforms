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

function JntHolder4MotherNameFields({ formData, classToBeApplied }) {
  const motherTitleDDValues = Dropdowns('title');

  function handleChangeFifthHolderMotherSalutation(e) {
    formData.title_mother_fifth_account_holder = UpCase(e.target.value);
  }
  function handleChangeFifthHolderMotherFName(e) {
    formData.fname_mother_fifth_account_holder = UpCase(e.target.value);
  }
  function handleChangeFifthHolderMotherMName(e) {
    formData.mname_mother_fifth_account_holder = UpCase(e.target.value);
  }
  function handleChangeFifthHolderMotherLName(e) {
    formData.lname_mother_fifth_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <h5>Mother's Details</h5>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="fifthHolderMotherSalutation">Title *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeFifthHolderMotherSalutation}
            inputProps={{
              name: 'fifthHolderMotherSalutation',
              id: 'fifthHolderMotherSalutation',
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
              name: 'fifthHolderMotherFirstName',
              id: 'fifthHolderMotherFirstName',
              maxLength: 30,
            }}
            label="First Name"
            onChange={handleChangeFifthHolderMotherFName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'fifthHolderMotherMiddleName',
              id: 'fifthHolderMotherMiddleName',
              maxLength: 30,
            }}
            label="Middle Name"
            onChange={handleChangeFifthHolderMotherMName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'fifthHolderMotherLastName',
              id: 'fifthHolderMotherLastName',
              maxLength: 30,
            }}
            label="Last Name"
            onChange={handleChangeFifthHolderMotherLName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder4MotherNameFields;
