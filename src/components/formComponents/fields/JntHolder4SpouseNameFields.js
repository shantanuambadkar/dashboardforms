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

function JntHolder4SpouseNameFields({ formData, classToBeApplied }) {
  const spouseTitleDDValues = Dropdowns('title');

  function handleChangeFifthHolderSpouseSalutation(e) {
    formData.title_spouse_fifth_account_holder = UpCase(e.target.value);
  }
  function handleChangeFifthHolderSpouseFName(e) {
    formData.fname_spouse_fifth_account_holder = UpCase(e.target.value);
  }
  function handleChangeFifthHolderSpouseMName(e) {
    formData.mname_spouse_fifth_account_holder = UpCase(e.target.value);
  }
  function handleChangeFifthHolderSpouseLName(e) {
    formData.lname_spouse_fifth_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <h5>Spouse's Details</h5>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="fifthHolderSpouseSalutation">Title *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeFifthHolderSpouseSalutation}
            inputProps={{
              name: 'fifthHolderSpouseSalutation',
              id: 'fifthHolderSpouseSalutation',
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
              name: 'fifthHolderSpouseFirstName',
              id: 'fifthHolderSpouseFirstName',
              maxLength: 30,
            }}
            label="First Name"
            onChange={handleChangeFifthHolderSpouseFName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'fifthHolderSpouseMiddleName',
              id: 'fifthHolderSpouseMiddleName',
              maxLength: 30,
            }}
            label="Middle Name"
            onChange={handleChangeFifthHolderSpouseMName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'fifthHolderSpouseLastName',
              id: 'fifthHolderSpouseLastName',
              maxLength: 30,
            }}
            label="Last Name"
            onChange={handleChangeFifthHolderSpouseLName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder4SpouseNameFields;
