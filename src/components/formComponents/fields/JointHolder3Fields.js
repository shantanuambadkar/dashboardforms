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

function JointHolder3Fields({ formData, classToBeApplied }) {
  const jntHolder3SalutationDDValue = Dropdowns('title');

  function handleChangeJntHldr3Salutation(e) {
    formData.title_forth_account_holder = UpCase(e.target.value);
  }
  function handleChangeJntHldr3FName(e) {
    formData.fname_forth_account_holder = UpCase(e.target.value);
  }
  function handleChangeJntHldr3MName(e) {
    formData.mname_forth_account_holder = UpCase(e.target.value);
  }
  function handleChangeJntHldr3LName(e) {
    formData.lname_forth_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFromTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="jntHolder3Salutation">Title *</InputLabel>
          <Select
            required
            className={classToBeApplied}
            onChange={handleChangeJntHldr3Salutation}
            inputProps={{
              name: 'jntHolder3Salutation',
              id: 'jntHolder3Salutation',
            }}
          >
            {jntHolder3SalutationDDValue.map((value) => {
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
              name: 'jntHolder3FirstName',
              id: 'jntHolder3FirstName',
              maxLength: 30,
            }}
            label="First Name"
            onChange={handleChangeJntHldr3FName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'jntHolder3MiddleName',
              id: 'jntHolder3MiddleName',
              maxLength: 30,
            }}
            label="Middle Name"
            onChange={handleChangeJntHldr3MName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'jntHolder3LastName',
              id: 'jntHolder3LastName',
              maxLength: 30,
            }}
            label="Last Name"
            onChange={handleChangeJntHldr3LName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JointHolder3Fields;
