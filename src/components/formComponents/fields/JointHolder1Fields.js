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

function JointHolder1Fields({ formData, classToBeApplied }) {
  const jntHolderSalutationDDValue = Dropdowns('title');

  function handleChangeJntHldr1Salutation(e) {
    formData.title_scnd_account_holder = UpCase(e.target.value);
  }
  function handleChangeJntHldr1FName(e) {
    formData.fname_scnd_account_holder = UpCase(e.target.value);
  }
  function handleChangeJntHldr1MName(e) {
    formData.mname_scnd_account_holder = UpCase(e.target.value);
  }
  function handleChangeJntHldr1LName(e) {
    formData.lname_scnd_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFromTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="jntHolderSalutation">Title *</InputLabel>
          <Select
            required
            className={classToBeApplied}
            onChange={handleChangeJntHldr1Salutation}
            inputProps={{
              name: 'jntHolderSalutation',
              id: 'jntHolderSalutation',
            }}
          >
            {jntHolderSalutationDDValue.map((value) => {
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
              name: 'jntHolderFirstName',
              id: 'jntHolderFirstName',
              maxLength: 30,
            }}
            label="First Name"
            onChange={handleChangeJntHldr1FName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'jntHolderMiddleName',
              id: 'jntHolderMiddleName',
              maxLength: 30,
            }}
            label="Middle Name"
            onChange={handleChangeJntHldr1MName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'jntHolderLastName',
              id: 'jntHolderLastName',
              maxLength: 30,
            }}
            label="Last Name"
            onChange={handleChangeJntHldr1LName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JointHolder1Fields;
