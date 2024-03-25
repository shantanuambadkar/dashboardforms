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

function JntHolder1SpouseNameFields({ formData, classToBeApplied }) {
  const spouseTitleDDValues = Dropdowns('title');

  function handleChangeScndHolderSpouseSalutation(e) {
    formData.title_spouse_scnd_account_holder = UpCase(e.target.value);
  }
  function handleChangeScndHolderSpouseFName(e) {
    formData.fname_spouse_scnd_account_holder = UpCase(e.target.value);
  }
  function handleChangeScndHolderSpouseMName(e) {
    formData.mname_spouse_scnd_account_holder = UpCase(e.target.value);
  }
  function handleChangeScndHolderSpouseLName(e) {
    formData.lname_spouse_scnd_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <h5>Spouse's Details</h5>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="scndHolderSpouseSalutation">Title *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeScndHolderSpouseSalutation}
            inputProps={{
              name: 'scndHolderSpouseSalutation',
              id: 'scndHolderSpouseSalutation',
            }}
          >
            {spouseTitleDDValues.map((value) => {
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
              name: 'scndHolderSpouseFirstName',
              id: 'scndHolderSpouseFirstName',
              maxLength: 30,
            }}
            label="First Name"
            onChange={handleChangeScndHolderSpouseFName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'scndHolderSpouseMiddleName',
              id: 'scndHolderSpouseMiddleName',
              maxLength: 30,
            }}
            label="Middle Name"
            onChange={handleChangeScndHolderSpouseMName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'scndHolderSpouseLastName',
              id: 'scndHolderSpouseLastName',
              maxLength: 30,
            }}
            label="Last Name"
            onChange={handleChangeScndHolderSpouseLName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder1SpouseNameFields;
