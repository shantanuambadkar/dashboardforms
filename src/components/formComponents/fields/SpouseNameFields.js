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

function SpouseNameFields({ formName, formData, classToBeApplied }) {
  const spouseTitleDDValues = Dropdowns('title');

  function handleChangeCustSpouseSalutation(e) {
    formData.title_spouse_fst_account_holder = UpCase(e.target.value);
  }
  function handleChangeCustSpouseFName(e) {
    formData.fname_spouse_fst_account_holder = UpCase(e.target.value);
  }
  function handleChangeCustSpouseMName(e) {
    formData.mname_spouse_fst_account_holder = UpCase(e.target.value);
  }
  function handleChangeCustSpouseLName(e) {
    formData.lname_spouse_fst_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <h5>Spouse's Details</h5>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="custSpouseSalutation">Title *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeCustSpouseSalutation}
            inputProps={{
              name: 'custSpouseSalutation',
              id: 'custSpouseSalutation',
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
              name: 'custSpouseFirstName',
              id: 'custSpouseFirstName',
              maxLength: 30,
            }}
            label="First Name"
            onChange={handleChangeCustSpouseFName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'custSpouseMiddleName',
              id: 'custSpouseMiddleName',
              maxLength: 30,
            }}
            label="Middle Name"
            onChange={handleChangeCustSpouseMName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'custSpouseLastName',
              id: 'custSpouseLastName',
              maxLength: 30,
            }}
            label="Last Name"
            onChange={handleChangeCustSpouseLName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default SpouseNameFields;
