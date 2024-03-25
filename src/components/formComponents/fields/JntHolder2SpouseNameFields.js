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

function JntHolder2SpouseNameFields({ formData, classToBeApplied }) {
  const spouseTitleDDValues = Dropdowns('title');

  function handleChangeThrdHolderSpouseSalutation(e) {
    formData.title_spouse_thrd_account_holder = UpCase(e.target.value);
  }
  function handleChangeThrdHolderSpouseFName(e) {
    formData.fname_spouse_thrd_account_holder = UpCase(e.target.value);
  }
  function handleChangeThrdHolderSpouseMName(e) {
    formData.mname_spouse_thrd_account_holder = UpCase(e.target.value);
  }
  function handleChangeThrdHolderSpouseLName(e) {
    formData.lname_spouse_thrd_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <h5>Spouse's Details</h5>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="thrdHolderSpouseSalutation">Title *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeThrdHolderSpouseSalutation}
            inputProps={{
              name: 'thrdHolderSpouseSalutation',
              id: 'thrdHolderSpouseSalutation',
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
              name: 'thrdHolderSpouseFirstName',
              id: 'thrdHolderSpouseFirstName',
              maxLength: 30,
            }}
            label="First Name"
            onChange={handleChangeThrdHolderSpouseFName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'thrdHolderSpouseMiddleName',
              id: 'thrdHolderSpouseMiddleName',
              maxLength: 30,
            }}
            label="Middle Name"
            onChange={handleChangeThrdHolderSpouseMName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'thrdHolderSpouseLastName',
              id: 'thrdHolderSpouseLastName',
              maxLength: 30,
            }}
            label="Last Name"
            onChange={handleChangeThrdHolderSpouseLName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder2SpouseNameFields;
