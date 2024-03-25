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

function MotherNameFields({ formName, formData, classToBeApplied }) {
  const motherTitleDDValues = Dropdowns('title');

  function handleChangeCustMotherSalutation(e) {
    formData.title_mother_fst_account_holder = UpCase(e.target.value);
  }
  function handleChangeCustMotherFName(e) {
    formData.fname_mother_fst_account_holder = UpCase(e.target.value);
  }
  function handleChangeCustMotherMName(e) {
    formData.mname_mother_fst_account_holder = UpCase(e.target.value);
  }
  function handleChangeCustMotherLName(e) {
    formData.lname_mother_fst_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <h5>Mother's Details</h5>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="custMotherSalutation">Title *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeCustMotherSalutation}
            inputProps={{
              name: 'custMotherSalutation',
              id: 'custMotherSalutation',
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
              name: 'custMotherFirstName',
              id: 'custMotherFirstName',
              maxLength: 30,
            }}
            label="First Name"
            onChange={handleChangeCustMotherFName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'custMotherMiddleName',
              id: 'custMotherMiddleName',
              maxLength: 30,
            }}
            label="Middle Name"
            onChange={handleChangeCustMotherMName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'custMotherLastName',
              id: 'custMotherLastName',
              maxLength: 30,
            }}
            label="Last Name"
            onChange={handleChangeCustMotherLName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default MotherNameFields;
