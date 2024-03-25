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

function JntHolder1MotherNameFields({ formData, classToBeApplied }) {
  const motherTitleDDValues = Dropdowns('title');

  function handleChangeScndHolderMotherSalutation(e) {
    formData.title_mother_scnd_account_holder = UpCase(e.target.value);
  }
  function handleChangeScndHolderMotherFName(e) {
    formData.fname_mother_scnd_account_holder = UpCase(e.target.value);
  }
  function handleChangeScndHolderMotherMName(e) {
    formData.mname_mother_scnd_account_holder = UpCase(e.target.value);
  }
  function handleChangeScndHolderMotherLName(e) {
    formData.lname_mother_scnd_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <h5>Mother's Details</h5>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="scndHolderMotherSalutation">Title *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeScndHolderMotherSalutation}
            inputProps={{
              name: 'scndHolderMotherSalutation',
              id: 'scndHolderMotherSalutation',
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
              name: 'scndHolderMotherFirstName',
              id: 'scndHolderMotherFirstName',
              maxLength: 30,
            }}
            label="First Name"
            onChange={handleChangeScndHolderMotherFName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'scndHolderMotherMiddleName',
              id: 'scndHolderMotherMiddleName',
              maxLength: 30,
            }}
            label="Middle Name"
            onChange={handleChangeScndHolderMotherMName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'scndHolderMotherLastName',
              id: 'scndHolderMotherLastName',
              maxLength: 30,
            }}
            label="Last Name"
            onChange={handleChangeScndHolderMotherLName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder1MotherNameFields;
