import React from 'react';
import '../../../css/Common.css';
import '../../../css/Fields.css';
import {
  Grid,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@material-ui/core';
import Dropdowns from '../reusableComponents/Dropdowns';
import UpCase from './UpCase';

function JointHolder2Fields({ formData, classToBeApplied }) {
  const jntHolder2SalutationDDValue = Dropdowns('title');

  function handleChangeJntHldr2Salutation(e) {
    formData.title_thrd_account_holder = UpCase(e.target.value);
  }
  function handleChangeJntHldr2FName(e) {
    formData.fname_thrd_account_holder = UpCase(e.target.value);
  }
  function handleChangeJntHldr2MName(e) {
    formData.mname_thrd_account_holder = UpCase(e.target.value);
  }
  function handleChangeJntHldr2LName(e) {
    formData.lname_thrd_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFromTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="jntHolder2Salutation">Title *</InputLabel>
          <Select
            required
            className={classToBeApplied}
            onChange={handleChangeJntHldr2Salutation}
            inputProps={{
              name: 'jntHolder2Salutation',
              id: 'jntHolder2Salutation',
            }}
          >
            {jntHolder2SalutationDDValue.map((value) => {
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
              name: 'jntHolder2FirstName',
              id: 'jntHolder2FirstName',
              maxLength: 30,
            }}
            label="First Name"
            onChange={handleChangeJntHldr2FName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'jntHolder2MiddleName',
              id: 'jntHolder2MiddleName',
              maxLength: 30,
            }}
            label="Middle Name"
            onChange={handleChangeJntHldr2MName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'jntHolder2LastName',
              id: 'jntHolder2LastName',
              maxLength: 30,
            }}
            label="Last Name"
            onChange={handleChangeJntHldr2LName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JointHolder2Fields;
