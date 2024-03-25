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

function JntHolder3SpouseNameFields({ formData, classToBeApplied }) {
  const spouseTitleDDValues = Dropdowns('title');

  function handleChangeForthHolderSpouseSalutation(e) {
    formData.title_spouse_forth_account_holder = UpCase(e.target.value);
  }
  function handleChangeForthHolderSpouseFName(e) {
    formData.fname_spouse_forth_account_holder = UpCase(e.target.value);
  }
  function handleChangeForthHolderSpouseMName(e) {
    formData.mname_spouse_forth_account_holder = UpCase(e.target.value);
  }
  function handleChangeForthHolderSpouseLName(e) {
    formData.lname_spouse_forth_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <h5>Spouse's Details</h5>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="forthHolderSpouseSalutation">Title *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeForthHolderSpouseSalutation}
            inputProps={{
              name: 'forthHolderSpouseSalutation',
              id: 'forthHolderSpouseSalutation',
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
              name: 'forthHolderSpouseFirstName',
              id: 'forthHolderSpouseFirstName',
              maxLength: 30,
            }}
            label="First Name"
            onChange={handleChangeForthHolderSpouseFName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'forthHolderSpouseMiddleName',
              id: 'forthHolderSpouseMiddleName',
              maxLength: 30,
            }}
            label="Middle Name"
            onChange={handleChangeForthHolderSpouseMName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'forthHolderSpouseLastName',
              id: 'forthHolderSpouseLastName',
              maxLength: 30,
            }}
            label="Last Name"
            onChange={handleChangeForthHolderSpouseLName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder3SpouseNameFields;
