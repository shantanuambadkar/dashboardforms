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

function JointHolder4Fields({ formData, classToBeApplied }) {
  const jntHolder4SalutationDDValue = Dropdowns('title');

  function handleChangeJntHldr4Salutation(e) {
    formData.title_fifth_account_holder = UpCase(e.target.value);
  }
  function handleChangeJntHldr4FName(e) {
    formData.fname_fifth_account_holder = UpCase(e.target.value);
  }
  function handleChangeJntHldr4MName(e) {
    formData.mname_fifth_account_holder = UpCase(e.target.value);
  }
  function handleChangeJntHldr4LName(e) {
    formData.lname_fifth_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFromTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="jntHolder4Salutation">Title *</InputLabel>
          <Select
            required
            className={classToBeApplied}
            onChange={handleChangeJntHldr4Salutation}
            inputProps={{
              name: 'jntHolder4Salutation',
              id: 'jntHolder4Salutation',
            }}
          >
            {jntHolder4SalutationDDValue.map((value) => {
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
              name: 'jntHolder4FirstName',
              id: 'jntHolder4FirstName',
              maxLength: 30,
            }}
            label="First Name"
            onChange={handleChangeJntHldr4FName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'jntHolder4MiddleName',
              id: 'jntHolder4MiddleName',
              maxLength: 30,
            }}
            label="Middle Name"
            onChange={handleChangeJntHldr4MName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'jntHolder4LastName',
              id: 'jntHolder4LastName',
              maxLength: 30,
            }}
            label="Last Name"
            onChange={handleChangeJntHldr4LName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JointHolder4Fields;
